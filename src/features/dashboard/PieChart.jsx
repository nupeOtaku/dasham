import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ecommerceProducts } from "../../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const sortedProducts = [...ecommerceProducts].sort((a, b) => b.price - a.price);
const topExpensiveProducts = sortedProducts.slice(0, 3);

const expensive = topExpensiveProducts.map((product) => product.price);
const expensiveCategory = topExpensiveProducts.map(
  (product) => product.productName,
);

const data = {
  labels: expensiveCategory,
  datasets: [
    {
      data: expensive,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top 3 Expensive Products",
    },
    scales: {
      x: {
        type: "category",
        grid: {
          display: true,
        },
      },
    },
  },
};

const PieChart = () => {
  return (
    <div className="flex w-full items-start justify-center rounded-md bg-white p-4 shadow-md sm:w-full md:justify-center  lg:justify-start xl:w-1/4">
      <Pie data={data} options={chartOptions} />
    </div>
  );
};

export default PieChart;
