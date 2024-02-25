import { FaStore } from "react-icons/fa";
import { ecommerceProducts as data } from "../../data/data";
import { BiSolidCartAlt, BiSolidPurchaseTag } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const SimpleStat = () => {
  const totalStocks = data.reduce((acc, cur) => acc + cur.stock, 0);
  const totalOrders = data.reduce((acc, cur) => acc + cur.order, 0);
  const totalProducts = data.length;
  const totalSales = data.reduce((acc, cur) => acc + cur.sales, 0);
  const canceledOrders = data.reduce((acc, cur) => acc + cur.canceledOrders, 0);

  return (
    <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
      <div className="flex h-32 flex-1 flex-col items-center gap-4 rounded-md bg-white p-2  shadow-md">
        <p className="text-sm font-semibold text-gray-400">Total Stocks</p>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-2">
            <FaStore className="text-blue-950  lg:text-3xl xl:text-5xl" />
          </div>
          <p className="font-semibold text-gray-600 lg:text-3xl xl:text-5xl">
            {totalStocks}
          </p>
        </div>
      </div>

      <div className="flex h-32 flex-1 flex-col items-center gap-4 rounded-md bg-white p-2  shadow-md">
        <p className="text-sm font-semibold text-gray-400">Total Products</p>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-2">
            <BiSolidCartAlt className="text-blue-950 lg:text-3xl  xl:text-5xl" />
          </div>
          <p className="font-semibold  text-gray-600 lg:text-3xl xl:text-5xl">
            {totalProducts}
          </p>
        </div>
      </div>

      <div className="flex h-32 flex-1 flex-col items-center gap-4 rounded-md bg-white p-2  shadow-md">
        <p className="text-sm font-semibold text-gray-400">Total Orders</p>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-2">
            <BsFillCartCheckFill className="text-blue-950 lg:text-3xl  xl:text-5xl" />
          </div>
          <p className="font-semibold text-gray-600 lg:text-3xl  xl:text-5xl">
            {totalOrders}
          </p>
        </div>
      </div>

      <div className="flex h-32 flex-1 flex-col items-center gap-4 rounded-md bg-white p-2  shadow-md">
        <p className="text-sm font-semibold text-gray-400">Total Products</p>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-2">
            <BiSolidPurchaseTag className="text-blue-950  lg:text-3xl xl:text-5xl" />
          </div>
          <p className="font-semibold text-gray-600 lg:text-3xl  xl:text-5xl">
            {totalSales}
          </p>
        </div>
      </div>

      <div className="flex h-32 flex-1 flex-col items-center gap-4 rounded-md bg-white p-2  shadow-md">
        <p className="text-sm font-semibold text-gray-400">Cancelled Orders</p>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-2">
            <MdCancel className="text-blue-950 lg:text-3xl  xl:text-5xl" />
          </div>
          <p className="font-semibold text-gray-600 lg:text-3xl  xl:text-5xl">
            {canceledOrders}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleStat;
