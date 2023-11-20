import React, { ReactNode, HTMLProps } from "react";

export interface LabelProps extends  HTMLProps<HTMLLabelElement>{
    name: string;
}

const LabelForm = ({name, value}:LabelProps) => {
    return (
        <label htmlFor={name} >
            {value}
        </label>
    );
};
export default LabelForm;