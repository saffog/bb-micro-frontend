import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

const labelsMonths = [
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

export const data = {
  labels: labelsMonths,
  datasets: [
    {
      fill: true,
      label: "Inversiones",
      data: labelsMonths.map(() => faker.number.int({ min: 0, max: 100000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.5,
    },
  ],
};

const labelsD = [
  "Nov 8",
  "Nov 9",
  "Nov 10",
  "Nov 11",
  "Nov 12",
  "Nov 13",
  "Nov 14",
];

const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const dataChart = {
  labels: labelsD,
  datasets: [
    {
      label: "Ingresos",
      data: [8, 7, 4, 6, 8, 5, 10],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.5,
    },
    {
      label: "Egresos",
      data: [4, 2, 5, 8, 2, 7, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.5,
    },
  ],
};

export const handlers = [
  http.get("/ingresos-egresos", () => {
    return HttpResponse.json({
      optionsChart: optionsChart,
      dataChart: dataChart,
    });
  }),
  http.get("/inversiones", () => {
    return HttpResponse.json({
      options: options,
      data: data,
    });
  }),
];
