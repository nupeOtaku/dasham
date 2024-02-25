import { AiOutlineCloseCircle } from "react-icons/ai";

/* eslint-disable react/prop-types */
const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="relative z-50 mx-auto w-2/4 overflow-y-auto rounded bg-white p-4 shadow-lg">
        <span className="absolute right-2 top-1 cursor-pointer">
          <AiOutlineCloseCircle
            onClick={closeModal}
            className="text-md text-3xl text-orange-500"
          />
        </span>

        <h2 className=" mb-4 text-center text-2xl underline underline-offset-2">
          Edit Products
        </h2>
        <div className="modal-content px-6 py-4 text-left">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
