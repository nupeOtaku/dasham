import Products from "../features/displayproduct/Products";

const ListProduct = () => {
  return (
    <>
      <div className="rounded-l-md rounded-t-md bg-white p-4">
        <p className="font-bold text-blue-950">All Products</p>
      </div>
      <ul className="bg-gray-200">
        <li className="flex flex-wrap content-center items-center gap-x-2 border-t-2 border-gray-100 p-4 font-semibold md:grid md:grid-cols-[3rem_2fr_1fr_1fr_1fr_1fr_1fr] md:gap-x-8 ">
          <span>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 cursor-pointer text-indigo-600"
            />
          </span>
          <p>Product</p>
          <p>Price</p>
          <p>Brand</p>
          <p className="hidden lg:block">Stock</p>
          <p className="hidden lg:block">Category</p>
        </li>
      </ul>
      <Products />
    </>
  );
};

export default ListProduct;
