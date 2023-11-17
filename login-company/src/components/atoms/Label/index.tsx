import React from "react";
import { LabelProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Label: React.FC<LabelProps> = ({ content, styledClass }: LabelProps) => {
  return (
    <label className={`${styles.labelForm} ${styledClass}`}>{content}</label>
  );
};

export default Label;
