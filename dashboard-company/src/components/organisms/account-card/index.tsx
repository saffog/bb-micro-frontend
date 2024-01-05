import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import LabelForm from "../../atoms/label";
import IconForm from '../../atoms/icon';

import styles from "./account-card.module.css";

export interface AccountCardProps { 
    styleIcon: IconDefinition;
    leftUpperText?: string;
    leftMiddleText?: string;
    leftBottomText?: string;
    rightUpperText?: string;
    grayBackground?: boolean;
}

const AccountCardForm = ({styleIcon, leftUpperText, leftBottomText, leftMiddleText, rightUpperText, grayBackground}: AccountCardProps) => {
    return (
        <div className={`${styles.cardContainer} ${grayBackground ? styles.backgroundGrey : styles.backgroundWhite }` }>
            <div className={styles.iconColumn}>
                <IconForm styleIcon={styleIcon} size='2x' className={styles.icon} />
            </div>
            <div className={styles.cardColumn}>
                <div className={styles.column}>
                    <div className={styles.rowHeader}>
                        <LabelForm name={`2`} value={leftUpperText}/>
                    </div>
                    <div className={styles.rowText}>
                        <LabelForm name={`2`} value={leftMiddleText}/>
                    </div>
                </div>
                <div className={styles.columnMoney}>
                    <div className={styles.rowText}>
                        <span className={styles.labelNumber}>
                            numero
                        </span>
                        {` `}
                        <LabelForm name={`3`} value={leftBottomText}/>
                    </div>
                    <div className={styles.labelTotal}>
                        <LabelForm name={`4`} value={rightUpperText}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AccountCardForm;