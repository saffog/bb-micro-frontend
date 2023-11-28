import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";
import { InfoPerson } from "../data";

import styles from "../../styles/styles.module.css";

function Card() {

  const InfoPersona = InfoPerson
  
  return (
    <div className={styles.general_card}>
      {
        InfoPersona.map( (Info: any) => (
            <div className={styles.flex_row} key= {Info.userId}>
                { Info.products.map((Info: any) => (
                    <div className={styles.card} key= {Info.type}> 
                      <h1 className={styles.card_tex} > {Info.description} </h1>
                      
                      { Info.accounts.map((Info: any) => (
                        <div className={styles.card_info} key= {Info.id} >
                          
                          {(() => {

                          switch (Info.type) {
                            case 'inversiones':
                                return (
                                  <FaMoneyBillTrendUp  size='60'/>
                                )
                            case 'cheques':
                                return (
                                  <CiMoneyCheck1 size='60'/>
                                )
                            case 'automotriz':
                              return (
                                <GiCarKey size='60'/>
                              )
                            case 'hipotecario':
                              return (
                                <BsFillHousesFill size='60'/>
                              )
                            default:
                                return (
                                  <GiTakeMyMoney size='60'/>
                                )
                          }
                          })()}

                          <h1 className={styles.card_subtext}>{Info.type}</h1>
                          <h1 className={styles.card_subtext}>{Info.description}</h1>
                          <p className={styles.mt4}>{Info.number}</p>
                          <p className={styles.card_amount}>{Info.amount}</p>
                          <button className={styles.card_button}>
                            Más Detalles
                          </button>
                        </div>
                      ))}

                      <button className={styles.button}>
                        Más cuentas
                      </button>

                    </div>
                ))}
            </div>
        ))}
    </div>

  )
}

export default Card