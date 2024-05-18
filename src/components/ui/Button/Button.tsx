import React from "react";
import clsx from "clsx";
import LoadingIcon from "@/icons/loading.svg";
import styles from "./Button.module.scss";
import { SIZES, VARIANTS } from "./const";

export default function Button({
  className,
  size = SIZES.LARGE,
  variant = VARIANTS.PRIMARY,
  loading,
  PrefixIcon,
  SuffixIcon,
  onClick,
  onDoubleClick = () => {},
  text,
  children,
  disabled,
}: Readonly<{
  className?: string;
  size?: string;
  variant?: string;
  color?: string;
  loading?: boolean;
  PrefixIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  SuffixIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  onDoubleClick?: () => void;
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}>) {
  const label = text ?? children;
  return (
    <button
      onClick={!disabled && onClick ? onClick : undefined}
      className={clsx(
        styles.button,
        styles[SIZES[size]],
        styles[VARIANTS[variant]],
        { [styles.LOADING]: loading },
        { [styles.DISABLED]: disabled },
        className
      )}
    >
      {loading ? (
        <div className={clsx(styles.loading)}>
          <LoadingIcon />
        </div>
      ) : null}
      {PrefixIcon && (
        <PrefixIcon className={clsx(styles.icon, styles.prefix)} />
      )}
      {label && <span>{label}</span>}
      {SuffixIcon && (
        <SuffixIcon className={clsx(styles.icon, styles.suffix)} />
      )}
    </button>
  );
}

Button.VARIANTS = VARIANTS;
Button.SIZES = SIZES;
