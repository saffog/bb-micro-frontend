import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms/button/index';
import { HeroContainer } from '../../organisms/hero-container/index';
import { AboutContainer } from '../../organisms/about-container';
import { ProductsContainer } from '../../organisms/products-container';
import { ContactContainer } from '../../organisms/contact-container';
import { landingAppPrefix } from '../../constants/routes.constant';

const LandingBaseName = `/${landingAppPrefix}`;

export default () => {

  return (
    <>
      <div className='container'>
        <HeroContainer />
        <AboutContainer />
        <ProductsContainer />
        <ContactContainer />
      </div>
    </>
  );
}