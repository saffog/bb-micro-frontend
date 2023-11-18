import React from "react";
import LabelForm, { LabelProps } from "../../atoms/label";
import IconForm, { IconProps } from "../../atoms/icon";

export interface IconLabelProps extends LabelProps, IconProps {
}

const IconLabelForm = ({name, value, styleIcon, tailwindStyle}:IconLabelProps) => {
    return (
        <div className={tailwindStyle}>
            <IconForm styleIcon={styleIcon}/>  <LabelForm name={name} value={value}/>
        </div>
    );
};
export default IconLabelForm;