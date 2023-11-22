import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    styleIcon: IconDefinition;
}

const IconForm = ({styleIcon}:IconProps) => {
    return (
        <FontAwesomeIcon icon={styleIcon} />
    );
};
export default IconForm;