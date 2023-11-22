import React from "react";
import IconLabelForm  from "../../molecules/icon-label";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import LabelForm from "../../atoms/label";
import style from "./account-card.module.css";

export interface AccountCardProps { 
    styleIcon: IconDefinition;
    leftUpperText?: string;
    leftMidleText?: string;
    leftBottomText?: string;
    rightUpperText?: string;
}

const AccountCardForm = ({styleIcon, leftUpperText, leftBottomText, leftMidleText, rightUpperText}: AccountCardProps) => {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardColumn}>
                <div className={style.column}>
                    <div className={style.rowHeader}>
                        <IconLabelForm name={`1`} value={leftUpperText} styleIcon={styleIcon} />
                    </div>
                    <div className={style.rowText}>
                        <LabelForm name={`2`} value={leftMidleText}/>
                    </div>
                    <div className={style.rowText}>
                        <LabelForm name={`3`} value={leftBottomText}/>                        
                    </div>
                </div>
                <div className={style.columnMoney}>
                    <LabelForm name={`4`} value={rightUpperText}/>
                </div>
            </div>
        </div>
    );
};
export default AccountCardForm;