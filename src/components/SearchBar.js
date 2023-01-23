const SearchBar = () => {
  return (
    <div>
      <input style={styleSearchBar} type="text" />
    </div>
  );
};

const styleSearchBar = {
  width: "95%",
  border: "1px solid #333",
  borderRadius: "4px",
  padding: "7px 5px",
  margin: "2px 9px",
};

export default SearchBar;
