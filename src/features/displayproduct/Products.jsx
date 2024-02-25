import { useFormData } from "../../contexts/FormDataContext";
import DisplayProducts from "./DisplayProducts";

const Products = () => {
  const { formData } = useFormData();
  const data = formData;

  if (Object.keys(formData).length === 0) {
    return (
      <p className=" rounded-md bg-white p-4 text-center text-xl font-bold text-red-500 shadow-md">
        No products yet, please add some products
      </p>
    );
  }

  return (
    <ul className="rounded-bl-md rounded-br-md bg-white ">
      {data.map((item) => (
        <DisplayProducts key={crypto.randomUUID()} item={item} />
      ))}
    </ul>
  );
};

export default Products;
