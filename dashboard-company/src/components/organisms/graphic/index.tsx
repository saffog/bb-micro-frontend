import React from "react";
import { Line } from "react-chartjs-2";
// import { ingresosEgresos, inversiones } from "../../../apis/apis";
import {
  options,
  data,
  dataChart,
  optionsChart,
} from "../../../data/company-data";
import styles from "./index.module.css";
import AccountsSection from '../accounts-section';

export const Graphic = () => {
  // const [options, setOptions] = useState({});
  // const [dataInversiones, setDatadataInversiones] = useState({
  //   labels: [],
  //   datasets: [],
  // });
  // const [optionsChart, setOptionsChart] = useState({});
  // const [dataChart, setDataChart] = useState({ labels: [], datasets: [] });
  // useEffect(() => {
  //   inversiones().then((data) => {
  //     setOptions(data.options);
  //     setDatadataInversiones(data.data);
  //   });
  //   ingresosEgresos().then((data) => {
  //     setOptionsChart(data.optionsChart);
  //     setDataChart(data.dataChart);
  //   });
  // }, []);

  return (
    <div className={styles.graphsContainer}>
      <AccountsSection title="Inversiones">
        <Line className={styles.graphs} options={options} data={data} />
      </AccountsSection>
      <AccountsSection title="Ingresos & Egresos">
        <Line className={styles.graphs} options={optionsChart} data={dataChart} />
      </AccountsSection>
    </div>
  );
};
