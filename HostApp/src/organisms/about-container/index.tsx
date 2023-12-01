import React from 'react'
import { AboutLayout } from '../../molecules/about-layout';

import styles from './index.module.css';

export const AboutContainer = () => {
    return (
        <div className={styles.mainContainer} id='about'>
            <div className={styles.title}>
                <h1>Nuestros servicios</h1>
                <p>En BAU-Banking, nos dedicamos a trascender los límites de la banca convencional.
                    Nuestra misión es proporcionar soluciones financieras innovadoras y accesibles que empoderen a nuestros clientes.
                    Con años de experiencia y un equipo apasionado, estamos comprometidos a reinventar la forma en que las personas interactúan
                    con sus finanzas. Desde la transparencia en cada transacción hasta la personalización de servicios, en Baufest
                    creemos que cada cliente merece una experiencia bancaria única. Únete a nosotros en este viaje hacia el futuro financiero,
                    donde la confianza, la tecnología y el compromiso se encuentran para crear una comunidad financiera más sólida y conectada.
                </p>
            </div>
            <div className={styles.container}>
                <AboutLayout
                    title={'Banking Online'}
                    img='https://cdn-icons-png.flaticon.com/512/4874/4874094.png'
                    content={`Type some text that relates to the above unrelated heading you just typed now to make it look good.`}
                />
                <AboutLayout
                    title={'Banking Crypto'}
                    img='https://cdn-icons-png.flaticon.com/512/2272/2272825.png'
                    content={`Type some text that relates to the above unrelated heading you just typed now to make it look good.`}
                />
                <AboutLayout
                    title={'Dashboard Insights'}
                    img='https://cdn-icons-png.flaticon.com/512/6292/6292175.png'
                    content={`Type some text that relates to the above unrelated heading you just typed now to make it look good.`}
                />
            </div>
        </div>
    )
}
