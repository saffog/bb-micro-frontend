import React, { useEffect, useState } from "react";
import { Line, Radar } from "react-chartjs-2";
// import { ingresosEgresos, inversiones } from "../../../apis/apis";
import {
  options,
  data,
  dataChart,
  optionsChart,
} from "../../../data/company-data";
import style from "./index.module.css";

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
    <div>
      <h1 className={style.graphicsTitle}>Información sobre la cuenta</h1>
      <div>
        <div>
          <Line options={options} data={data} />
        </div>
        <div>
          <Line options={optionsChart} data={dataChart} />
        </div>
      </div>
    </div>
  );
};
