interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps): React.ReactElement {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm font-medium tracking-wide transition-all duration-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]";

  const variants = {
    primary:
      "bg-foreground text-background hover:bg-accent hover:text-white",
    outline:
      "border border-foreground/15 text-foreground hover:border-accent hover:bg-accent hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
