/* eslint-disable react/prop-types */
const Button = ({ onClick, children, type }) => {
  const Styles = {
    primary:
      'bg-orange-500 w-full text-center transition-all text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none flex items-center justify-center',
    none: 'bg-transparent ',
  };

  return (
    <button
      className={`bg-orange-500 w-full text-center transition-all text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none flex items-center justify-center ${Styles[type]}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
