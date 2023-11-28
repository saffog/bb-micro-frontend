import React from "react";
import LabelForm, { LabelProps } from "../../atoms/label";
import IconForm, { IconProps } from "../../atoms/icon";
import styles from "./index.module.css";

export interface IconLabelProps extends LabelProps, IconProps {}

const IconLabelForm = ({ name, value, styleIcon }: IconLabelProps) => {
  return (
    <div>
      <IconForm styleIcon={styleIcon} />{" "}
      <LabelForm className={styles.productName} name={name} value={value} />
    </div>
  );
};
export default IconLabelForm;
