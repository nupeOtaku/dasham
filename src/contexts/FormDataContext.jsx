/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { ecommerceProducts as data } from "../data/data";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([...data]);

  const updateFormData = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormDataContext);
};
