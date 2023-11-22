import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";
import { InfoPerson } from "../data";
import '../../index.scss';

function Card() {

  const InfoPersona = InfoPerson
  
  return (
    <div className="text-center p-4 w-full">
      {
        InfoPersona.map( (Info: any) => (
            <div className='flex flex-row' key= {Info.userId}>
                { Info.products.map((Info: any) => (
                    <div className='mx-4 basis-1/3' key= {Info.type}>
                      <h1 className="text-2xl capitalize" > {Info.type} </h1>
                      <h1 className="text-2xl capitalize" > {Info.description} </h1>
                      
                      { Info.accounts.map((Info: any) => (
                        <div className="rounded-lg p-5 mt-2 border-2 border-black" key= {Info.id} >
                          
                          {(() => {

                          switch (Info.type) {
                            case 'inversiones':
                                return (
                                  <FaMoneyBillTrendUp/>
                                )
                            case 'cheques':
                                return (
                                  <CiMoneyCheck1/>
                                )
                            case 'automotriz':
                              return (
                                <GiCarKey/>
                              )
                            case 'hipotecario':
                              return (
                                <BsFillHousesFill/>
                              )
                            default:
                                return (
                                  <GiTakeMyMoney/>
                                )
                          }
                          })()}

                          <h1 className="text-xl capitalize">{Info.type}</h1>
                          <h1 className="text-xl capitalize">{Info.description}</h1>
                          <p className="mb-4">{Info.number}</p>
                          <p className="text-3xl mb-2">{Info.amount}</p>
                          <button className='px-3 py-2 rounded-lg cursor-pointer bg-blue-500'>
                            Más Detalles
                          </button>
                        </div>
                      ))}

                    </div>
                ))}
            </div>
        ))}
    </div>

  )
}

export default Card