import React from "react";

type LabelProps = {
    content: string;
    styledClass?: string
};

const Label: React.FC<LabelProps> = ({content, styledClass}) => {
  return (
    <label className={styledClass}>{content}</label>
  );
}

export default Label;
