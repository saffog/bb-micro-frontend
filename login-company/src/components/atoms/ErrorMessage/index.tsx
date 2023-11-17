import React from "react";
import { ErrorMessageProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMesage,
  styledClass,
}: ErrorMessageProps) => {
  return (
    <p className={`${styles.errorMessage} ${styledClass}`}>{errorMesage}</p>
  );
};

export default ErrorMessage;
