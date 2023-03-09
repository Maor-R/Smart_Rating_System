import useSearch from "./../../hooks/useSearch";

const Search = () => {
  const { text, onSubmit, onChange } = useSearch();

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="form "
        style={{ fontSize: "1.2rem", width: "140%" }}
      >
        <div className="position-r">
          <input
            type="text"
            name="text"
            placeholder="Search products"
            value={text}
            onChange={onChange}
          />

          <button
            className="btn btn-block center-text button-in-input"
            onClick={onSubmit}
          >
            🔍
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
