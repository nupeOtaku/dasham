import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const welcomeText = getWelcomeText(location.pathname);

  function getWelcomeText(pathname) {
    switch (pathname) {
      case "/dashboard/add-product":
        return "Add New Product";
      case "/dashboard/list-product":
        return "Products";
      case "/dashboard":
        return "Welcome Admin";
      default:
        return "Welcome Admin";
    }
  }

  return (
    <div className="flex flex-col justify-start">
      <p className="font-bold text-blue-950 md:text-2xl xl:text-3xl">
        {welcomeText}
      </p>
    </div>
  );
};

export default Welcome;
