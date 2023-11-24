import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { faker } from "@faker-js/faker";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

export const companyAccounts = [
  {
    userId: "usid098391",
    products: [
      {
        type: "corporate debit",
        description: "Cuentas corporativas",
        accounts: [
          {
            id: 1,
            type: "cheques",
            number: "****7890",
            description: "JJ & Asociados cheques",
            amount: "$45,987.00",
            icon: "credit",
          },
          {
            id: 2,
            type: "inversiones",
            number: "****7891",
            description: "Evasión SAT",
            amount: "$45,987.00",
            icon: "other",
          },
        ],
      },
      {
        type: "corporate credit",
        description: "Tarjetas corporativas",
        accounts: [
          {
            id: 1,
            type: "credito diamante",
            number: "****7893",
            description: "Alejandro Gómez",
            amount: "$45,987.00",
            icon: "credit",
          },
          {
            id: 2,
            type: "credito gold",
            number: "****7894",
            description: "Alfonso Xochipa",
            amount: "$45,987.00",
            icon: "other",
          },
        ],
      },
      {
        type: "corporate loans",
        description: "Préstamos corporativos",
        accounts: [
          {
            id: 1,
            type: "automotriz",
            number: "****7895",
            description: "Automotriz Pipó",
            amount: "$45,987.00",
            icon: "car",
          },
          {
            id: 2,
            type: "hipotecario",
            number: "****7896",
            description: "Hipotecaría Fest",
            amount: "$45,987.00",
            icon: "house",
          },
        ],
      },
    ],
  },
];

const labelsD = [
  "Nov 8",
  "Nov 9",
  "Nov 10",
  "Nov 11",
  "Nov 12",
  "Nov 13",
  "Nov 14",
];

export const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const dataChart = {
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
