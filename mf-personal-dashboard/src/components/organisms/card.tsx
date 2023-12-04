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
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white bg-clip-border rounded-xl">
        <div className="p-6">
          <div className="flex flex_row justify-between items-center">
            <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mis Cuentas
            </h5>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-dark text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              ver más
            </button>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white bg-clip-border rounded-xl">
        <div className="p-6">
          <div className="flex flex_row justify-between items-center">
            <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mis Cuentas
            </h5>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-dark text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              ver más
            </button>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col mt-6 text-gray-700 bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex items-center pb-4">
                  <div className="pr-2">
                    <FaMoneyBillTrendUp className="text-gray-600" size='20'/>
                  </div>
                  <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    cheques
                  </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    numero
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    ****7890
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ahorros y nómina</h4>
                <div className="mt-1">
                  45,987.00
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-md font-semibold text-button">Más detalles </span>
                  {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  )
}

export default Card