import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 mb-2 md:mb-0 mr-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
