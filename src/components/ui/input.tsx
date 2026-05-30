import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        style={{
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
          padding: "8px 12px",
          fontSize: "14px",
          backgroundColor: "#fff",
          ...props.style
        }}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
