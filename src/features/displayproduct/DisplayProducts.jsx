/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useModify } from "../../contexts/ModifyContext";
import EditProductForm from "../modifyproduct/EditProductForm";

const DisplayProducts = ({ item }) => {
  const [checkBox, setCheckBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { deleteItem, setEditItemData } = useModify();

  const {
    image,
    category,
    stock,
    costPrice: price,
    brand,
    productName,
    id,
  } = item;

  const handleDelete = () => {
    deleteItem(id);
  };

  const handleEdit = () => {
    setEditItemData(item);
    setShowModal(true);
  };

  return (
    <li className="flex flex-wrap content-center items-center gap-x-2 border-t-2 border-gray-100 p-4 font-semibold md:grid md:grid-cols-[3rem_2fr_1fr_1fr_1fr_1fr_1fr] md:gap-x-8 ">
      <span>
        <input
          onClick={() => setCheckBox(!checkBox)}
          type="checkbox"
          className="form-checkbox h-5 w-5 cursor-pointer text-indigo-600"
        />
      </span>
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt={productName}
          className="hidden w-24 bg-orange-200 md:block"
        />
        <p>{productName}</p>
      </div>
      <p>{price}</p>
      <p>{brand}</p>
      <p className="hidden lg:block">{stock}</p>
      <p className="hidden lg:block">{category}</p>

      {checkBox && (
        <div className="mt-4 flex gap-2 self-center md:mt-0 md:flex-row">
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      )}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <EditProductForm closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </li>
  );
};

export default DisplayProducts;
