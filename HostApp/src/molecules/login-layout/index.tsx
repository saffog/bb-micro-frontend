import React, {ReactNode} from 'react'
import { Button } from '../../atoms/button';
import ButtonProps from '../../interfaces/button-props.interface';
import styles from './index.module.css';

interface Props {
    title: string;
    bodyContent: ReactNode;
    buttonProps?: Array<ButtonProps>;
    backgroundColor?: string;

}
export const LoginLayout = ({ title, bodyContent, buttonProps, backgroundColor }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <h1>{title}</h1>
            </div>
            <div className={styles.body} >
                <span>{bodyContent}</span>
            </div>
            <div className={styles.actions} >
                {buttonProps?.map(btn => <Button {...btn} />)}
            </div>

        </div>
    )
}
