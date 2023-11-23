import React from "react";
import { Line, Radar } from "react-chartjs-2";
import {
  options,
  data,
  dataChart,
  optionsChart,
} from "../../../data/company-data";

export const Graphic = () => {
  return (
    <div>
      <h1>Información sobre la cuenta</h1>
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
