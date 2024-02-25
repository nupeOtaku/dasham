/* eslint-disable react/prop-types */
import Styles from "../pages/Dashboard.module.css";

const MainContent = ({ children }) => {
  return (
    <div className={` h-[calc(100vh-6rem)] overflow-auto ${Styles.thirdCol}`}>
      {children}
    </div>
  );
};

export default MainContent;
