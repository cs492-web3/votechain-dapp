import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const ResultChart = ({ voteData, voteLabels }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
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

  return (
    <div style={{width: '70%'}}>
    <Doughnut data={data} />
    </div>
  )

};

export default ResultChart;
