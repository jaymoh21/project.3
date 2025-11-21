import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
