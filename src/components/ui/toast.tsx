import * as React from "react"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ToastViewport = () => {
  return <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 100, display: "flex", flexDirection: "column", gap: "10px" }} />
}

export const Toast = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { open?: boolean }>(
  ({ className, open, ...props }, ref) => {
    if (!open) return null
    return (
      <div
        ref={ref}
        style={{
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          ...props.style
        }}
        {...props}
      />
    )
  }
)
Toast.displayName = "Toast"

export const ToastTitle = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div style={{ fontSize: "14px", fontWeight: "600", ...props.style }} {...props} />
)

export const ToastDescription = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div style={{ fontSize: "14px", opacity: 0.9, ...props.style }} {...props} />
)

export const ToastClose = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }} {...props}>✕</button>
)

export type ToastActionElement = React.ReactElement
