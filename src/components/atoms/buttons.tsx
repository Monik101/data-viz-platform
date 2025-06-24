import { cn } from "../../utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "icon" | "ghost";
  onClick?: () => void;
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const base = "px-5 py-2 rounded font-medium transition-colors outline-none";
  const styles = {
    primary: "border-[0.67px] border-[#5A5A5A] bg-[#242424]",
    icon: "",
    ghost: "border-[0.67px] border-transparent hover:border-[#5A5A5A]",
  };

  return (
    <button className={cn(base, styles[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
