import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, RadialLinearScale, Filler } from "chart.js";
import { faker } from '@faker-js/faker';

    Chart.register(
        LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, RadialLinearScale, Filler
    )

    const labelsD = ["Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14"]

    const optionsChart = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' as const,
        },
        },
    }

    const dataChart = {
        labels: labelsD ,
        datasets: [
        {
            label: "Ingresos",
            data: [8, 7, 4, 6, 8, 5, 10],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.5
        },
        {
            label: "Egresos",
            data: [4, 2, 5, 8, 2, 7, 1],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.5
        },
        ]
    }

    const labelsMonths = ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
          },
        },
      };
      
    const data = {
        labels : labelsMonths,
        datasets: [
          {
            fill: true,
            label: 'Inversiones',
            data: labelsMonths.map(() => faker.number.int({ min: 0, max: 100000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.5
          },
        ],
      };

      const labelsRadar = ['CETES', 'Google', 'Microsoft', 'Intel', 'Amazon', 'Apple']

      const dataRadar = {
        labels: labelsRadar,
        datasets: [
          {
            label: '# Crecimiento',
            data: labelsRadar.map(() => faker.number.int({min: 1, max: 100})),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

    export {
        dataChart,
        optionsChart,
        data,
        options,
        dataRadar
    }