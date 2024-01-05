import React, {Children} from 'react'
import {IconType} from 'react-icons';

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCarKey, GiTakeMyMoney } from "react-icons/gi";
import { BsFillHousesFill } from "react-icons/bs";

import SectionCards from '../molecules/SectionCards';
import Card from '../molecules/Card';
import { InfoPerson as Persons } from "../data";
import Carousel from '../molecules/Carousel';
import useDevice from '../../hooks/useDevice';

const ICONS: {[key: string]: IconType} = {
  inversiones: FaMoneyBillTrendUp,
  cheques: CiMoneyCheck1,
  automotriz: GiCarKey,
  hipotecario: BsFillHousesFill,
};

const Cards = () => {
  const { isMobile } = useDevice();
  return (
    <div>
      {Children.toArray(Persons.map( (person) =>
          Children.toArray(person.products.map((product) => (
            <SectionCards titleSection={product.description} action={() => null} enabledButton={isMobile} >
              { !isMobile && Children.toArray(product.accounts.map((account) => (
                <Card
                  title={account.type}
                  icon={ICONS[account.type] ?? GiTakeMyMoney}
                  number={account.number}
                  description={account.description}
                  total={account.amount}
                />
              )))}
              { isMobile &&
                <Carousel items={
                  Children.toArray(product.accounts.map((account) => (
                    <Card
                      title={account.type}
                      icon={ICONS[account.type] ?? GiTakeMyMoney}
                      number={account.number}
                      description={account.description}
                      total={account.amount}
                    />
                  )))
                }/>
              }
            </SectionCards>
          )))
      ))}
    </div>
  )
}

export default Cards