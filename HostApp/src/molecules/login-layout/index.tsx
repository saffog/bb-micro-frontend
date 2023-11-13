import React from 'react'
import { Button } from '../../atoms/button';
import ButtonProps from '../../interfaces/button-props.interface';
import styles from './index.module.css';

interface Props {
    title: string;
    bodyContent: string | Element;
    buttonProps?: Array<ButtonProps>;
    backgroundColor?: string;

}
export const LoginLayout = ({ title, bodyContent, buttonProps, backgroundColor }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header} style={{ flex: 1 }}>
                <h1>{title}</h1>
            </div>
            <div className={styles.body} style={{ flex: 1 }}>
                <span>{bodyContent}</span>
            </div>
            <div className={styles.actions} style={{ flex: 1 }}>
                {buttonProps?.map(btn => <Button {...btn} />)}
            </div>

        </div>
    )
}
