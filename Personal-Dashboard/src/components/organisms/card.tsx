import React from 'react'
import { PiBankDuotone } from "react-icons/pi";
import { InfoPerson } from "../data";

function Card() {

  const InfoPersona = InfoPerson
  
  return (
    <div className="text-center p-4 w-3/12">
      {
        InfoPersona.map( (Info: any) => (
            <div key= {Info.userId}>
                { Info.products.map((Info: any) => (
                    <div className="bg-white border rounded-lg shadow-lg p-5 mt-2" key= {Info.type}>
                      <PiBankDuotone />
                      <h1 className="text-2xl capitalize" > {Info.type} </h1>
                      <h1 className="text-2xl capitalize" > {Info.description} </h1>
                      
                      { Info.accounts.map((Info: any) => (
                        <div className="p-4" key= {Info.id} >
                          <h1 className="text-xl">{Info.type}</h1>
                          <h1 className="text-xl">{Info.description}</h1>
                          <p className="mb-4">{Info.number}</p>
                          <p className="mb-2">{Info.amount}</p>
                          <button className='px-3 py-2 rounded-lg cursor-pointer bg-blue-500'>
                            info
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