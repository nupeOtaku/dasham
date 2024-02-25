const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="col-span-full bg-orange-500 p-2 text-center text-sm text-white md:p-4 md:text-xl">
      &copy; {year} made by Coded Surveyor with 💗
    </footer>
  );
};

export default Footer;
