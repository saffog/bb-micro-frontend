import React from "react";

import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import AccountCardForm from "../../organisms/account-card";
import { companyAccounts } from "../../../data/company-data";
import { Graphic } from "../../organisms/graphic";
import AccountsSection from '../../organisms/accounts-section';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

import style from "./home.module.css";

const ICONS: {[key: string] : IconDefinition} = {
  'cheques': icon({ name:'money-check'}),
  'inversiones': icon({ name:'money-bill-trend-up'}),
  'automotriz': icon({ name:'car'}),
  'hipotecario': icon({ name:'house-lock'}),
  'default': icon({ name:'hand-holding-dollar'}),
}
const HomePage = () => {
  return (
    <div className={style.homePageContainer}>
      <div className={style.accountsContainer} style={{flex:1}}>
        {companyAccounts.map((company) =>
          company.products.map((product) => (
            <AccountsSection title={product.description} action={() => null} >
              {product.accounts.map((account, index) => (
                <AccountCardForm
                  styleIcon={ICONS[(account.type)] ? ICONS[(account.type)] : ICONS.default}
                  grayBackground={index % 2 === 0}
                  leftUpperText={account.description}
                  leftMiddleText={account.type}
                  leftBottomText={account.number}
                  rightUpperText={account.amount}
                />
              ))}
            </AccountsSection>
          ))
        )}
      </div>
      <div className={style.graphs}>
        <Graphic />
      </div>
    </div>
  );
};

export default HomePage;
