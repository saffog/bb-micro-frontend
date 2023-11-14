import React from "react";
import { LabelProps } from "../../interfaces/interfaces";

const Label: React.FC<LabelProps> = ({ content, styledClass }: LabelProps) => {
  return <label className={styledClass}>{content}</label>;
};

export default Label;
