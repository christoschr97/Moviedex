const SearchBox = ({ placeholder, className, onChangeHandler }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={`${className} search-box block w-4/12 mx-auto my-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
