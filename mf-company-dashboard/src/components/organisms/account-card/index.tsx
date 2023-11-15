import React from "react";
import IconLabelForm  from "../../molecules/icon-label";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import LabelForm from "../../atoms/label";

export interface AccountCardProps { 
    styleIcon: IconDefinition;
    leftUpperText?: string;
    leftMidleText?: string;
    leftBottomText?: string;
    rightUpperText?: string;
}

const AccountCardForm = ({styleIcon, leftUpperText, leftBottomText, leftMidleText, rightUpperText}: AccountCardProps) => {
    return (
        <div className="border-4 border-indigo-200">
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-3">
                    <IconLabelForm name={`1`} value={leftUpperText} styleIcon={styleIcon} />
                    <LabelForm name={`2`} value={leftMidleText}/>
                    <LabelForm name={`3`} value={leftBottomText}/>
                </div>
                <div className="grid grid-rows-1">
                    <LabelForm name={`4`} value={rightUpperText}/>
                </div>
            </div>
        </div>
    );
};
export default AccountCardForm;