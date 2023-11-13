import React from 'react'
import styles from './index.module.css';
interface Props {
    img: string;
    title: string;
    content: string;
}
export const AboutLayout = ({ img, content, title }: Props) => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentLayout}>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}
