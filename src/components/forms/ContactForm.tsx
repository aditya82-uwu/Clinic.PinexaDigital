"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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
      <div className="flex flex-col items-center gap-3 rounded-lg bg-navy/5 p-10 text-center">
        <CheckCircle2 size={28} className="text-navy" />
        <p className="font-display text-xl text-navy">Request received</p>
        <p className="text-sm text-slate">Our front desk will call to confirm a time.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Your name"
        className="h-12 w-full rounded-md border border-navy/15 bg-paper px-4 text-sm"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="h-12 w-full rounded-md border border-navy/15 bg-paper px-4 text-sm"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="h-12 w-full rounded-md border border-navy/15 bg-paper px-4 text-sm"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Reason for visit"
        className="w-full rounded-md border border-navy/15 bg-paper px-4 py-3 text-sm"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-teal text-sm font-medium text-paper transition-colors hover:bg-teal/90 disabled:opacity-60"
      >
        {status === "submitting" ? <Loader2 size={16} className="animate-spin" /> : "Request Appointment"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — try again or call us directly.</p>
      )}
    </form>
  );
}
