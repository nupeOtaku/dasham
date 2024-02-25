import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <form className="relative hidden w-3/4 md:block">
      <span className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-500">
        <AiOutlineSearch className="text-xl text-gray-300" />
      </span>
      <input
        type="text"
        className="w-full rounded-lg border-2 border-gray-300 px-1 py-2 pl-8 focus:border-blue-950 focus:outline-none"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
