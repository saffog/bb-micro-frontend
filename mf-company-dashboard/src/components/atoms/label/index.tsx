import React, { ReactNode, HTMLProps } from "react";

export interface LabelProps extends  HTMLProps<HTMLLabelElement>{
    name: string;
    tailwindStyle?:string;
}

const LabelForm = ({name, value, tailwindStyle}:LabelProps) => {
    return (
        <label htmlFor={name} className={tailwindStyle}>
            {value}
        </label>
    );
};
export default LabelForm;