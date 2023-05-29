import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultChart = ({ voteData, voteLabels }) => {
  const title = "dhakjshdk";
  const data = {
    labels: voteLabels,
    datasets: [
      {
        label: "Vote Result",
        data: voteData,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ResultChart;
