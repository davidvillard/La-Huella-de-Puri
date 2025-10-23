"use client";
import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex justify-center items-center rounded-[33px] font-normal transition-all duration-500";
  const variants = {
    primary:
      "bg-white text-black shadow-[0_4px_32px_rgba(223,195,124,0.25)] px-5 sm:px-10 py-2.5 sm:py-4 font-bold hover:bg-[#f7f7f7] hover:scale-105 hover:-translate-y-1 hover:shadow-lg",
    secondary:
      "border border-white/30 text-white px-3.5 sm:px-7 py-1.5 sm:py-3 hover:bg-white/10",
    outline:
      "border border-[#354A37] text-[#354A37] bg-transparent px-6 py-3 hover:bg-[#354A37] hover:text-white",
  };

  const classes = `${base} ${variants[variant] || ""} ${className}`;

  // Si hay href, usa Link
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  // Si no, botón normal
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}