"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2, User, Mail, Phone, FileText } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-green-50 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={28} className="text-green-600" />
        </div>
        <p className="text-lg font-bold text-navy">Request Received!</p>
        <p className="max-w-xs text-sm text-slate">
          Our front desk will call to confirm your appointment time, usually
          within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-slate/20 bg-slate-50 pl-10 pr-4 text-sm text-navy placeholder:text-slate/50 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="relative">
        <User size={15} className="absolute left-3.5 top-3.5 text-slate/40" />
        <input
          name="name"
          required
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail size={15} className="absolute left-3.5 top-3.5 text-slate/40" />
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone size={15} className="absolute left-3.5 top-3.5 text-slate/40" />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number (optional)"
          className={inputClass}
        />
      </div>

      {/* Service selector */}
      <select
        name="service"
        className="h-12 w-full rounded-xl border border-slate/20 bg-slate-50 px-4 text-sm text-navy focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
      >
        <option value="">Select a service (optional)</option>
        <option>General Checkup</option>
        <option>Pediatric Care</option>
        <option>Vaccinations</option>
        <option>Lab Testing</option>
        <option>Chronic Disease Care</option>
        <option>Mental Wellness</option>
        <option>Other</option>
      </select>

      {/* Message */}
      <div className="relative">
        <FileText size={15} className="absolute left-3.5 top-3.5 text-slate/40" />
        <textarea
          name="message"
          rows={4}
          placeholder="Reason for visit or any questions…"
          className="w-full rounded-xl border border-slate/20 bg-slate-50 py-3 pl-10 pr-4 text-sm text-navy placeholder:text-slate/50 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-600 text-sm font-bold text-paper shadow-sm shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Request Appointment"
        )}
      </button>

      {status === "error" && (
        <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong — please try again or call us directly.
        </p>
      )}

      <p className="text-center text-xs text-slate/60">
        By submitting, you agree to our privacy policy. We never share your data.
      </p>
    </form>
  );
}
