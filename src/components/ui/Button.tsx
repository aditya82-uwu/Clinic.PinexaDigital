import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        /* base — min 44px touch target per Apple HIG / WCAG */
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variant === "primary"
          ? "bg-sky-600 text-paper shadow-md shadow-sky-600/20 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/25 focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
          : variant === "secondary"
          ? "border border-navy/15 bg-white text-navy shadow-sm hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 hover:shadow-md"
          : "text-sky-700 hover:bg-sky-50 hover:text-sky-800",
        className,
      )}
    >
      {children}
    </Link>
  );
}
