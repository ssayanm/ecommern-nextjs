// import { useGlobalContext } from "../context";

const SearchBox = ({ history }) => {
  // const { query, handleSearch } = useGlobalContext();

  return (
    <form className="p-3 " onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="w-full p-2 border-2 border-cyan-600 bg-transparent text-gray-700 pl-4"
        // value={query}
        // onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products"
      />
    </form>
  );
};

export default SearchBox;
