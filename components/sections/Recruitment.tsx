"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, User, Phone, Mail, GraduationCap, FileText, Send } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig, getReducedMotionVariants } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  college: string;
  description: string;
}

const initialFormState: FormState = {
  name: "",
  mobile: "",
  email: "",
  college: "",
  description: "",
};

export default function Recruitment() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.college.trim()) newErrors.college = "College name is required";
    if (!form.description.trim()) newErrors.description = "Please tell us a bit about yourself";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSuccess(true);
        setForm(initialFormState);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to submit application.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="careers" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Careers</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Join Our Intern Program
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-xl text-body">
            Get hands-on experience building real-world digital products alongside our team. Submit your details below to apply.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mx-auto max-w-xl"
        >
          <motion.div variants={itemVariants}>
            <GlowCard className="bg-white/60 p-8 md:p-10 border border-border shadow-md rounded-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="recruitment-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-body/70">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-body/40" />
                        <input
                          id="recruitment-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Doe"
                          className={`w-full rounded-xl border bg-white/40 py-3 pr-4 pl-11 text-sm text-body outline-none transition-all focus:bg-white focus:ring-2 ${
                            errors.name ? "border-red-400 focus:ring-red-100" : "border-border focus:border-primary/50 focus:ring-primary/10"
                          }`}
                        />
                      </div>
                      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email & Mobile Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {/* Email */}
                      <div>
                        <label htmlFor="recruitment-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-body/70">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-body/40" />
                          <input
                            id="recruitment-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="john@example.com"
                            className={`w-full rounded-xl border bg-white/40 py-3 pr-4 pl-11 text-sm text-body outline-none transition-all focus:bg-white focus:ring-2 ${
                              errors.email ? "border-red-400 focus:ring-red-100" : "border-border focus:border-primary/50 focus:ring-primary/10"
                            }`}
                          />
                        </div>
                        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                      </div>

                      {/* Mobile */}
                      <div>
                        <label htmlFor="recruitment-mobile" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-body/70">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-body/40" />
                          <input
                            id="recruitment-mobile"
                            type="tel"
                            value={form.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            placeholder="+1 234 567 890"
                            className={`w-full rounded-xl border bg-white/40 py-3 pr-4 pl-11 text-sm text-body outline-none transition-all focus:bg-white focus:ring-2 ${
                              errors.mobile ? "border-red-400 focus:ring-red-100" : "border-border focus:border-primary/50 focus:ring-primary/10"
                            }`}
                          />
                        </div>
                        {errors.mobile && <p className="mt-1.5 text-xs text-red-500">{errors.mobile}</p>}
                      </div>
                    </div>

                    {/* College Name */}
                    <div>
                      <label htmlFor="recruitment-college" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-body/70">
                        College / University Name
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-body/40" />
                        <input
                          id="recruitment-college"
                          type="text"
                          value={form.college}
                          onChange={(e) => handleInputChange("college", e.target.value)}
                          placeholder="Stanford University"
                          className={`w-full rounded-xl border bg-white/40 py-3 pr-4 pl-11 text-sm text-body outline-none transition-all focus:bg-white focus:ring-2 ${
                            errors.college ? "border-red-400 focus:ring-red-100" : "border-border focus:border-primary/50 focus:ring-primary/10"
                          }`}
                        />
                      </div>
                      {errors.college && <p className="mt-1.5 text-xs text-red-500">{errors.college}</p>}
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="recruitment-description" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-body/70">
                        Tell us about yourself & interests
                      </label>
                      <div className="relative">
                        <FileText className="absolute top-4 left-4 h-4 w-4 text-body/40" />
                        <textarea
                          id="recruitment-description"
                          rows={4}
                          value={form.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          placeholder="What technologies are you interested in? Any projects you have worked on?"
                          className={`w-full rounded-xl border bg-white/40 py-3 pr-4 pl-11 text-sm text-body outline-none transition-all focus:bg-white focus:ring-2 ${
                            errors.description ? "border-red-400 focus:ring-red-100" : "border-border focus:border-primary/50 focus:ring-primary/10"
                          }`}
                        />
                      </div>
                      {errors.description && <p className="mt-1.5 text-xs text-red-500">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full justify-center py-3.5"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          Submit Application
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-8 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="mb-6 rounded-full bg-primary/10 p-4 text-primary"
                    >
                      <CheckCircle2 className="h-16 w-16" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold text-body">Application Received!</h3>
                    <p className="mb-6 text-sm text-body/70 max-w-sm">
                      Thank you for applying to our intern program. Our team will review your details and get in touch with you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 text-xs text-body"
                    >
                      Apply for another position
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
