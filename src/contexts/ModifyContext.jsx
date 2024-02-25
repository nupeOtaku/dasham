/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";
import { useFormData } from "./FormDataContext";
import { ecommerceProducts as data } from "../data/data";

const ModifyContext = createContext();

const ModifyProvider = ({ children }) => {
  const { formData, setFormData } = useFormData();

  const [items, setItems] = useState([...data]);
  const [editItemData, setEditItemData] = useState(null);

  useEffect(() => {
    setItems(formData);
  }, [formData]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setFormData(updatedItems);
    setItems(updatedItems);
  };

  const editItem = (id, newData) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? newData : item;
    });

    setItems(updatedItems);
    setFormData(updatedItems);
    setEditItemData(null);
  };

  return (
    <ModifyContext.Provider
      value={{ items, deleteItem, editItem, setEditItemData, editItemData }}
    >
      {children}
    </ModifyContext.Provider>
  );
};

const useModify = () => {
  const context = useContext(ModifyContext);
  if (context === undefined)
    throw new Error("This context was used outside the ModifyProvider");
  return context;
};

export { ModifyProvider, useModify };
