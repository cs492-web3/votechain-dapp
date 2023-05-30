import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ResultChart = ({ voteData, voteLabels }) => {
  const defaultColor = [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba",
  ];

  const data = {
    labels: voteLabels,
    datasets: [
      {
        label: "Vote Result",
        data: voteData,
        backgroundColor: defaultColor,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#444",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 20,
            color: "#fff",
          },
        },
      },
      y: {
        grid: {
          color: "#444",
        },
        min: 0,
        suggestedMin: 1,
        suggestedMax: 10,
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
    },
  };
  return (
    <div
      style={{
        margin: "50px",
        height: "60vh",
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};

export default ResultChart;
