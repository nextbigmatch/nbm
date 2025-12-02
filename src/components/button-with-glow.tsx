import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ButtonWithGlowProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function ButtonWithGlow({
  children,
  to,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = ""
}: ButtonWithGlowProps) {
  const baseClasses = "px-8 py-4 backdrop-blur-xl rounded-full transition-all hover:scale-105 inline-block text-center";
  
  const variantClasses = {
    primary: "bg-white/10 border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 glow-blue-md",
    secondary: "bg-[#0074C7]/10 border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 glow-blue-md"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
