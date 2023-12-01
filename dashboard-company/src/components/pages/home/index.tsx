import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import AccountCardForm from "../../organisms/account-card";
import style from "./home.module.css";
import { companyAccounts } from "../../../data/company-data";
import { Graphic } from "../../organisms/graphic";

const HomePage = () => {
  return (
    <div className={style.homePageContainer}>
      <div className={style.graphsContainer}>
        <Graphic />
      </div>
      <div className={style.cardsContainer}>
        {companyAccounts.map((data: any) => (
          <div key={data.userId} className={style.productContainer}>
            {data.products.map((product: any) => (
              <div key={product.type} className={style.productContainer}>
                <h1 className={style.productTitle}>{product.description}</h1>
                {product.accounts.map((account: any) => (
                  <div key={account.id} className={style.accountContainer}>
                  
                    <AccountCardForm
                      styleIcon={ (() => {
                        switch(account.type) {
                          case 'cheques':
                            return icon({ name: 'money-check' })
                          break
                          case 'inversiones':
                            return icon({ name: 'money-bill-trend-up' })
                          break
                          case 'automotriz':
                            return icon({ name: 'car' })
                          break
                          case 'hipotecario':
                            return icon({ name: 'house-lock' })
                          break
                          default:
                            return icon({ name: 'hand-holding-dollar' })
                        }
                        })() 
                      }
                      leftUpperText={account.description}
                      leftMidleText={account.type}
                      leftBottomText={account.number}
                      rightUpperText={account.amount}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
