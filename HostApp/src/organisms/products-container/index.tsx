import React from 'react'
import styles from './index.module.css';
import { Button } from '../../atoms/button';

export const ProductsContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerImage}>
        <img src='/assets/images/banking-about.jpeg'></img>
      </div>
      <div className={styles.containerText}>
        <h1>Nuestra gama de productos financieros</h1>
        <p>
          Descubre una variedad de productos financieros diseñados para satisfacer tus necesidades en constante evolución. 
          Desde cuentas de ahorro de última generación hasta soluciones de inversión personalizadas, 
          en BAU-Banking estamos comprometidos a ofrecerte una experiencia financiera integral. Explora nuestras opciones y encuentra la combinación perfecta que te ayude a alcanzar tus metas financieras. Con transparencia, innovación y dedicación, transformamos la manera en que interactúas con tus finanzas cotidianas.
        </p>
        <Button name='Descubrir'/>
      </div>

    </div>
  )
}
