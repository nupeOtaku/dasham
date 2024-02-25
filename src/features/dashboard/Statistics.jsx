import { ecommerceProducts as data } from "../../data/data";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import SimpleStat from "./SimpleStat";

const Statistics = () => {
  return (
    <div className=" space-y-6">
      <SimpleStat />
      <div className="flex w-full flex-col items-start justify-between space-y-4 sm:flex-col sm:gap-8 md:flex-row md:gap-6  md:space-y-0 lg:gap-6 xl:gap-8 ">
        <BarChart products={data} />
        <PieChart />
      </div>
    </div>
  );
};

export default Statistics;
