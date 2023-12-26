import React, {Children, useState, useEffect} from 'react'
import {IconType} from 'react-icons';

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";

import SectionCards from '../molecules/SectionCards';
import Card from '../molecules/Card';
//import { InfoPerson as Persons } from "../data";
import { getInfoPersonByUserId } from '../data/infoPerson';

const ICONS: {[key: string]: IconType} = {
  inversiones: FaMoneyBillTrendUp,
  cheques: CiMoneyCheck1,
  automotriz: GiCarKey,
  hipotecario: BsFillHousesFill,
};

const Cards = () => {
  const [InfoClient, setInfoClient] = useState([]);

  useEffect(() => {
    getInfoPersonByUserId('usid098720').then(setInfoClient);
  }, []);

  return (
    <div>

      { Children.toArray(InfoClient.map((product) => (
          <SectionCards titleSection={product.description} action={() => null} >
            {Children.toArray(product.accounts.map((account) => (
              <Card
                title={account.type}
                icon={ICONS[account.type] ?? GiTakeMyMoney}
                number={account.number}
                description={account.description}
                total={account.amount}
              />
            )))}
          </SectionCards>
        )))
      }

    </div>
  )
}

export default Cards