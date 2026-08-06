"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  city: z.string().min(1, "Please select a city"),
  scrapType: z.string().min(1, "Please describe your scrap type"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const CITIES_LIST = [
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar",
  "Bharuch", "Ankleshwar", "Vapi", "Morbi", "Gandhidham", "Gandhinagar",
  "Mehsana", "Kutch", "Other",
];

interface InquiryFormProps {
  variant?: "light" | "dark";
  className?: string;
}

export function InquiryForm({
  variant = "light",
  className,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = variant === "dark";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200",
    isDark
      ? "bg-white/8 border-white/12 text-white placeholder:text-white/40 focus:border-white/30 focus:bg-white/12"
      : "bg-white border-[#E8E8E8] text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#5E5E5E]"
  );

  const labelClass = cn(
    "block text-xs font-600 mb-1.5",
    isDark ? "text-[#AAAAAA]" : "text-[#5E5E5E]"
  );

  const errorClass = "text-xs text-red-400 mt-1";

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center p-12 rounded-2xl",
          isDark ? "bg-white/8" : "bg-white",
          className
        )}
        style={{ minHeight: 380 }}
      >
        <CheckCircle2 size={48} className="text-green-400 mb-4" />
        <h3
          className={cn(
            "text-xl font-700 mb-2",
            isDark ? "text-white" : "text-[#1A1A1A]"
          )}
        >
          Inquiry Received!
        </h3>
        <p className={cn("text-sm", isDark ? "text-[#AAA]" : "text-[#5E5E5E]")}>
          Our team will contact you within 2 hours to schedule an inspection.
        </p>
        <p
          className={cn(
            "text-sm font-600 mt-4",
            isDark ? "text-white" : "text-[#1A1A1A]"
          )}
        >
          Or call us directly:{" "}
          <a href={`tel:${COMPANY.phone}`} className="underline">
            {COMPANY.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl p-6 lg:p-8 space-y-5",
        isDark ? "bg-white/6 border border-white/10" : "bg-white border border-[#E8E8E8]",
        className
      )}
      style={{ boxShadow: isDark ? "none" : "0 4px 24px rgba(0,0,0,0.06)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            id="inquiry-name"
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className={labelClass}>
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("company")}
            id="inquiry-company"
            type="text"
            placeholder="Your company"
            className={inputClass}
          />
          {errors.company && (
            <p className={errorClass}>{errors.company.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>
            Mobile Number <span className="text-red-400">*</span>
          </label>
          <input
            {...register("phone")}
            id="inquiry-phone"
            type="tel"
            placeholder="10-digit mobile"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            {...register("email")}
            id="inquiry-email"
            type="email"
            placeholder="Optional"
            className={inputClass}
          />
        </div>

        {/* City */}
        <div>
          <label className={labelClass}>
            City <span className="text-red-400">*</span>
          </label>
          <select
            {...register("city")}
            id="inquiry-city"
            className={cn(inputClass, "cursor-pointer")}
          >
            <option value="">Select city</option>
            {CITIES_LIST.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>

        {/* Scrap Type */}
        <div>
          <label className={labelClass}>
            Scrap Type / Material <span className="text-red-400">*</span>
          </label>
          <input
            {...register("scrapType")}
            id="inquiry-scrap-type"
            type="text"
            placeholder="e.g., MS scrap, copper wire..."
            className={inputClass}
          />
          {errors.scrapType && (
            <p className={errorClass}>{errors.scrapType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Additional Details</label>
        <textarea
          {...register("message")}
          id="inquiry-message"
          rows={3}
          placeholder="Approximate quantity, location, any special requirements..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        id="inquiry-submit"
        disabled={isSubmitting}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-600 text-sm transition-all",
          "bg-[#222222] text-white hover:bg-[#111111] disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Inquiry
          </>
        )}
      </button>

      <p
        className={cn(
          "text-center text-xs",
          isDark ? "text-[#666]" : "text-[#AAAAAA]"
        )}
      >
        Our team responds within 2 hours during business hours.
      </p>
    </form>
  );
}
