import { useMenuContext } from "../contexts/MenuContext";

const HamburgerButton = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <button
      id="btn"
      onClick={() => setBtnOpen((btn) => !btn)}
      type="button"
      className={`button z-50 ${
        btnOpen ? "open" : ""
      } hamburger focus:outline-none lg:hidden`}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
};

export { HamburgerButton };
