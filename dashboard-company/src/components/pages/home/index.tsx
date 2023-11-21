import React from "react";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import AccountCardForm from "../../organisms/account-card";

const HomePage = () => {
    return (
        <div>
        <AccountCardForm 
        styleIcon={icon({name: 'user'})}
        leftUpperText={`JJ & Asociados`}
        leftMidleText={`**** 8976`}
        rightUpperText={`$45,987.00`}
        />
      </div>
    );
};

export default HomePage;