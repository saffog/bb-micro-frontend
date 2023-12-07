import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {IconDefinition, SizeProp} from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    styleIcon: IconDefinition;
    size?: SizeProp;
    className?: string;
}

const IconForm = ({styleIcon, size, className}:IconProps) => {
    return (
        <FontAwesomeIcon icon={styleIcon} size={size} className={className} />
    );
};
export default IconForm;