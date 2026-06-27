import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper function to escape CSV fields (handling quotes, commas, and newlines)
function escapeCSVField(val: string): string {
  const str = val ? String(val) : "";
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email, college, description } = body;

    // Validate request body
    if (!name || !mobile || !email || !college || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Append to local CSV (wrapped in try-catch as serverless platforms like Vercel are read-only)
    try {
      const csvPath = path.join(process.cwd(), "public", "applications.csv");
      const fileExists = fs.existsSync(csvPath);

      let csvContent = "";
      if (!fileExists) {
        csvContent += "Name,Mobile Number,Email Address,College/University,Description/Interests,Submission Date\n";
      }

      const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      const row = [
        escapeCSVField(name),
        escapeCSVField(mobile),
        escapeCSVField(email),
        escapeCSVField(college),
        escapeCSVField(description),
        escapeCSVField(dateStr)
      ].join(",") + "\n";

      csvContent += row;
      fs.appendFileSync(csvPath, csvContent, "utf-8");
    } catch (csvError) {
      console.warn("Local CSV write skipped or failed (expected on read-only hosting like Vercel):", csvError);
    }

    // Forward to Google Sheets Web App if configured
    const webappUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (webappUrl) {
      try {
        const response = await fetch(webappUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            mobile,
            email,
            college,
            description,
          }),
        });
        if (!response.ok) {
          console.error("Failed to forward application to Google Sheets Web App:", await response.text());
        }
      } catch (err) {
        console.error("Error forwarding application to Google Sheets Web App:", err);
      }
    }

    return NextResponse.json({ success: true, message: "Application saved successfully" });
  } catch (error: any) {
    console.error("Error saving application to CSV:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
