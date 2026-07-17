import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 text-black border rounded m-2"
        />
      </div>
    );
  }
);

Input.displayName = "Input";