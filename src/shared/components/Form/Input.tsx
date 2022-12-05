import React, { LegacyRef } from "react";

import "./Input.css";

interface InputProps {
  type: string;
  placeholder: string;
  title: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, title }, ref) => {
    return (
      <div className="input-container">
        <label htmlFor={title}>{title}</label>
        <input
          id={title}
          className="input"
          ref={ref}
          type={type}
          placeholder={placeholder}
          title={title}
        />
      </div>
    );
  }
);

export default Input;
