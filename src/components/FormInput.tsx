import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  hasError: boolean;
  errorMsg: string;
}

export const FormInput = ({ children, label, hasError, errorMsg }: Props) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      {children}
      {hasError && (
        <p role="alert" className="input-error">
          {errorMsg}
        </p>
      )}
    </div>
  );
};
