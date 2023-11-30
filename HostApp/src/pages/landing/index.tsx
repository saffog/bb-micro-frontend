import React from 'react';

import { HeroContainer } from '../../organisms/hero-container';
import { AboutContainer } from '../../organisms/about-container';
import { ProductsContainer } from '../../organisms/products-container';
import { ContactContainer } from '../../organisms/contact-container';
// import { landingAppPrefix } from '../../constants/routes.constant';

// const LandingBaseName = `/${landingAppPrefix}`;

export default () => {

  return (
    <div className='container'>
      <HeroContainer />
      <AboutContainer />
      <ProductsContainer />
      <ContactContainer />
    </div>
  );
}