import { cn } from "../../utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "icon" | "ghost";
  size?: "md" | "sm";
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const base =
    "rounded font-medium transition-colors outline-none cursor-pointer text-xs sm:text-base";
  const styles = {
    primary: "border-[0.67px] border-[#5A5A5A] bg-[#242424]",
    icon: "",
    ghost: "border-[0.67px] border-transparent hover:border-[#5A5A5A]",
  };
  const sizes = {
    md: "px-5 py-2",
    sm: "py-1.5 px-2.5",
  };

  return (
    <button className={cn(base, styles[variant], sizes[size])} {...props}>
      {children}
    </button>
  );
};

export default Button;
