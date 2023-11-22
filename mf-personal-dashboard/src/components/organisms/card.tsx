import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";
import { InfoPerson } from "../data";

function Card() {

  const InfoPersona = InfoPerson
  
  return (
    <div className="text-center p-2 w-full">
      {
        InfoPersona.map( (Info: any) => (
            <div className='flex flex-row' key= {Info.userId}>
                { Info.products.map((Info: any) => (
                    <div className='mx-4 basis-1/3' key= {Info.type}> 
                      <h1 className="text-2xl capitalize" > {Info.description} </h1>
                      
                      { Info.accounts.map((Info: any) => (
                        <div className="rounded-lg p-2 mt-4 border-2 border-black" key= {Info.id} >
                          
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

                          <h1 className="text-xl capitalize">{Info.type}</h1>
                          <h1 className="text-xl capitalize">{Info.description}</h1>
                          <p className="mt-4">{Info.number}</p>
                          <p className="text-3xl mb-2">{Info.amount}</p>
                          <button className='p-3 rounded-lg cursor-pointer bg-green-600'>
                            Más Detalles
                          </button>
                        </div>
                      ))}

                      <button className='p-3 mt-4 rounded-lg cursor-pointer bg-green-600'>
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