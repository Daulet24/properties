import React from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
  imageSrc?: string;
  altText?: string;
  text?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  imageSrc,
  altText,
  text,
  onClick,
  className,
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {imageSrc && (
        <img src={imageSrc} alt={altText} className={styles.button_image} />
      )}
      {text && <span className={styles.button_text}>{text}</span>}
    </button>
  );
};

export default Button;
