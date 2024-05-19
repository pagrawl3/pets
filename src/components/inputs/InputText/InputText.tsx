import React from "react";
import clsx from "clsx";
import Label from "../Label";
import Help from "../Help";
// import Icon from "../../../Icon";
import styles from "./InputText.module.scss";

const InputText = ({
  value,
  className,
  error,
  disabled,
  onFocus = () => {},
  onBlur = () => {},
  onChange,
  label,
  help,
  inputComponent,
  placeholder,
  type,
  autoFocus,
}: Readonly<{
  value?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  type?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  help?: string;
  inputComponent?: React.ComponentType;
  placeholder?: string;
  autoFocus?: boolean;
}>) => {
  const [focused, setFocused] = React.useState(false);
  const Input = inputComponent || InputField;

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => setFocused(true) + onFocus?.(e),
    [onFocus]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => setFocused(false) + onBlur?.(e),
    [onBlur]
  );

  const handleChange = React.useCallback(
    (value: string, e: React.ChangeEvent<HTMLInputElement>) =>
      onChange?.(value, e),
    [onChange]
  );

  return (
    <div
      className={clsx(styles.input, className, {
        [styles.disabled]: disabled,
        [styles.focused]: focused,
        [styles.hasError]: error,
      })}
    >
      <Label className={styles.label}>{label}</Label>
      <Input
        autoFocus={autoFocus}
        type={type}
        value={value || ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error ? <Help isError>{error}</Help> : <Help>{help}</Help>}
    </div>
  );
};

function InputField({
  placeholder,
  value,
  onChange = () => {},
  onFocus,
  onBlur,
  className,
  name,
  disabled,
  type,
  autoFocus,
}: Readonly<{
  placeholder?: string;
  value: string;
  onChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
  type?: string;
  autoFocus?: boolean;
}>) {
  const input = (
    <input
      autoFocus={autoFocus}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value, e)}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      type={type}
    />
  );
  return <div className={clsx(styles.inputField, className)}>{input}</div>;
}

export default React.memo(InputText);
