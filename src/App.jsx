import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route index="/" element={<Login />} />
      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="list-product" element={<ListProduct />} />
      </Route>
    </Routes>
  );
};

export default App;

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route index="/dashboard" element={<Dashboard />} />
//       <Route path="/dashboard" element={<AppLayout />}>
//         {/* <Route index element={<Navigate replace to="cities" />}></Route> */}
//         <Route path="add-product" element={<AddProduct />} />
//         <Route path="list-product" element={<ListProduct />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;
