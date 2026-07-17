import { cva, type VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}
const buttonVariants = cva(
  "rounded-lg", // Base classes
  {
    variants: {
      variant: {
        primary: "bg-purple-600 text-white",
        secondary: "bg-purple-200 text-purple-700",
        tertiary :"bg-green-200 text-white"
      },

      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${buttonVariants({
        variant: props.variant,
        size: props.size,
      })} flex items-center gap-2 cursor-pointer ${props.fullWidth ? " w-full flex justify-center items-center " : ""}`}
    >
      {props.startIcon}
      <span>{props.text}</span>
      {props.endIcon}
    </button>
  );
};
