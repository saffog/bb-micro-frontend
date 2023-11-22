import React from "react";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import AccountCardForm from "../../organisms/account-card";
import style from "./home.module.css";
import { companyAccounts } from "../../../data/company-data";
const HomePage = () => {

  return (
      <div className={style.homePageContainer}>
        <div className={style.graphsContainer}>
          Here goes the graphs!!
        </div>
        <div className={style.cardsContainer}>
          {
            companyAccounts.map((data:any) => (
              <div key={data.userId} className={style.productContainer}>
                {
                  data.products.map((product:any)=>(
                    <div className={style.productContainer}>
                      <h1>
                        {product.description}
                      </h1>
                        {
                          product.accounts.map((account:any)=>(
                            <div className={style.accountContainer}>
                              <AccountCardForm 
                              styleIcon={icon({name: 'user'})}
                              leftUpperText={account.description}
                              leftMidleText={account.type}
                              leftBottomText={account.number}
                              rightUpperText={account.amount}
                              />
                            </div>
                          ))
                        }
                  </div>
                  ))
                }
              </div>
              ))  
          }
        </div>
      </div>
    );
};

export default HomePage;