import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ children, href, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-teal text-paper hover:bg-teal/90"
          : "border border-navy/20 text-navy hover:bg-navy/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
