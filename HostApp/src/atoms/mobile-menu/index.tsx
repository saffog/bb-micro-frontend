import React, {useState} from 'react';
import { IoMenu } from "react-icons/io5";

import styles from './index.module.css';


const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
      <IoMenu onClick={toggleMenu} className={styles.hamburgerButton} />
      <ul className={styles.menuItems}>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
