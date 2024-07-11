import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PolynomialGraph = ({ coefficients }) => {
  if (coefficients.length === 0) return null;

  const generateData = () => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.1) {
      const y = coefficients.reduce((sum, coef, index) => sum + coef * Math.pow(x, coefficients.length - 1 - index), 0);
      data.push({ x, y });
    }
    return data;
  };

  const data = generateData();
  const chartData = {
    labels: data.map(point => point.x),
    datasets: [
      {
        label: 'Polynomial',
        data: data.map(point => point.y),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Polynomial Graph',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PolynomialGraph;
