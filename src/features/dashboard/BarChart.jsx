import { ecommerceProducts as data } from "../../data/data";

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
  Legend,
);

const BarChart = () => {
  const electronicStock = data
    .filter((item) => item.category === "Electronics")
    .reduce((total, item) => total + item.stock, 0);

  const clothingStock = data
    .filter((item) => item.category === "Clothing")
    .reduce((total, item) => total + item.stock, 0);

  const homeKitchenStock = data
    .filter((item) => item.category === "Home & Kitchen")
    .reduce((total, item) => total + item.stock, 0);

  const furnitureStock = data
    .filter((item) => item.category === "Furniture")
    .reduce((total, item) => total + item.stock, 0);

  const beautyStock = data
    .filter((item) => item.category === "Beauty")
    .reduce((total, item) => total + item.stock, 0);

  const toysGamesStock = data
    .filter((item) => item.category === "Toys & Games")
    .reduce((total, item) => total + item.stock, 0);

  const sportsOutdoorsStock = data
    .filter((item) => item.category === "Sports & Outdoors")
    .reduce((total, item) => total + item.stock, 0);

  const booksStock = data
    .filter((item) => item.category === "Books")
    .reduce((total, item) => total + item.stock, 0);

  const electronicOrders = data
    .filter((item) => item.category === "Electronics")
    .reduce((total, item) => total + item.order, 0);

  const clothingOrders = data
    .filter((item) => item.category === "Clothing")
    .reduce((total, item) => total + item.order, 0);

  const homeKitchenOrders = data
    .filter((item) => item.category === "Home & Kitchen")
    .reduce((total, item) => total + item.order, 0);

  const furnitureOrders = data
    .filter((item) => item.category === "Furniture")
    .reduce((total, item) => total + item.order, 0);

  const beautyOrders = data
    .filter((item) => item.category === "Beauty")
    .reduce((total, item) => total + item.order, 0);

  const toysGamesOrders = data
    .filter((item) => item.category === "Toys & Games")
    .reduce((total, item) => total + item.order, 0);

  const sportsOutdoorsOrders = data
    .filter((item) => item.category === "Sports & Outdoors")
    .reduce((total, item) => total + item.order, 0);

  const booksOrders = data
    .filter((item) => item.category === "Books")
    .reduce((total, item) => total + item.order, 0);

  const chartData = {
    labels: [
      "Electronics",
      "Clothing",
      "Home & Kitchen",
      "Furniture",
      "Beauty",
      "Toys & Games",
      "Sports & Outdoors",
      "Books",
    ],
    datasets: [
      {
        label: "Stocks",
        data: [
          electronicStock,
          clothingStock,
          homeKitchenStock,
          furnitureStock,
          beautyStock,
          toysGamesStock,
          sportsOutdoorsStock,
          booksStock,
        ],
        backgroundColor: "rgba(120, 233, 0, 0.7)",
      },
      {
        label: "Orders",
        data: [
          sportsOutdoorsOrders,
          beautyOrders,
          toysGamesOrders,
          booksOrders,
          electronicOrders,
          clothingOrders,
          homeKitchenOrders,
          furnitureOrders,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
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
        text: "Chart showing variation between Sales and Stocks",
      },
      scales: {
        x: {
          type: "category",
          grid: {
            display: true,
          },
        },
        y: {
          grid: {
            display: true,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      },
    },
  };

  return (
    <div className="flex h-64 w-full justify-center gap-4 rounded-md bg-white p-2 shadow-md md:h-auto   lg:w-2/3 xl:w-[73%]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
