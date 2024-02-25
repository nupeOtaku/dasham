/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import { useModify } from "../../contexts/ModifyContext";
import { useEffect } from "react";

function EditProductForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { editItemData, editItem } = useModify();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    if (editItemData) {
      editItem(editItemData.id, data);
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      closeModal();
    }, 3000);
  };

  useEffect(() => {
    if (editItemData) {
      Object.keys(editItemData).forEach((key) => {
        setValue(key, editItemData[key]);
      });
    }
  }, [editItemData, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto grid w-11/12 grid-cols-3 gap-5"
    >
      <div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="category"
          >
            Category:
          </label>
          <input
            {...register("category", { required: "Category is required" })}
            type="text"
            id="category"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.category ? "border-red-500" : ""
            }`}
            placeholder="Category"
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="brand"
          >
            Brand:
          </label>
          <input
            {...register("brand", { required: "Brand is required" })}
            type="text"
            id="brand"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.brand ? "border-red-500" : ""
            }`}
            placeholder="Brand"
          />
          {errors.brand && (
            <p className="mt-1 text-sm text-red-500">{errors.brand.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="productName"
          >
            Product Name:
          </label>
          <input
            {...register("productName", {
              required: "Product Name is required",
            })}
            type="text"
            id="productName"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.productName ? "border-red-500" : ""
            }`}
            placeholder="Product Name"
          />
          {errors.productName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.productName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="productCode"
          >
            Product Code:
          </label>
          <input
            {...register("productCode", {
              required: "Product Code is required",
            })}
            type="text"
            id="productCode"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.productCode ? "border-red-500" : ""
            }`}
            placeholder="Product Code"
            readOnly
          />
          {errors.productCode && (
            <p className="mt-1 text-sm text-red-500">
              {errors.productCode.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="stock"
          >
            Stock:
          </label>
          <select
            {...register("stock", { required: "Stock is required" })}
            id="stock"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.stock ? "border-red-500" : ""
            }`}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors.stock && (
            <p className="mt-1 text-sm text-red-500">{errors.stock.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="colors"
          >
            Colors:
          </label>
          <select
            {...register("colors", { required: "Color is required" })}
            id="colors"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.colors ? "border-red-500" : ""
            }`}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
          </select>
          {errors.colors && (
            <p className="mt-1 text-sm text-red-500">{errors.colors.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="sizes"
          >
            Sizes:
          </label>
          <select
            {...register("sizes", { required: "Size is required" })}
            id="sizes"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.sizes ? "border-red-500" : ""
            }`}
          >
            <option value="null">none</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
          </select>
          {errors.sizes && (
            <p className="mt-1 text-sm text-red-500">{errors.sizes.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="image"
          >
            Image URL:
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="text"
            id="image"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.image ? "border-red-500" : ""
            }`}
            placeholder="Image URL"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="discount"
          >
            Discount:
          </label>
          <input
            {...register("discount", { required: "Discount is required" })}
            type="text"
            id="discount"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.discount ? "border-red-500" : ""
            }`}
            placeholder="Discount"
          />
          {errors.discount && (
            <p className="mt-1 text-sm text-red-500">
              {errors.discount.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="costPrice"
          >
            Cost Price:
          </label>
          <input
            {...register("costPrice", { required: "Cost Price is required" })}
            type="text"
            id="costPrice"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.costPrice ? "border-red-500" : ""
            }`}
            placeholder="Cost Price"
          />
          {errors.costPrice && (
            <p className="mt-1 text-sm text-red-500">
              {errors.costPrice.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="status"
          >
            Status:
          </label>
          <select
            {...register("status", { required: "Status is required" })}
            id="status"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.status ? "border-red-500" : ""
            }`}
          >
            <option value="active">Active</option>
            <option value="sold">Sold</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-500">{errors.status.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            id="description"
            className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none ${
              errors.description ? "border-red-500" : ""
            }`}
            placeholder="Description"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <div className="col-start-2">
        <Button type="submit">
          {isLoading ? <Spinner /> : "Update Product"}
        </Button>
      </div>
    </form>
  );
}

export default EditProductForm;
