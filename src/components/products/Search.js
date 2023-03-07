import useSearch from './../../hooks/useSearch';

import { useProductsRatingsContext } from '../../context/productsRatings/ProductsRatingsContext';

const Search = () => {
  const { products, clearProducts } = useProductsRatingsContext();

  const { text, onSubmit, onChange } = useSearch();

  return (
    <div>
      <form onSubmit={onSubmit} className="form" style={{fontSize:'1.2rem', width:'140%'}}>
        <input
          type="text"
          name="text"
          placeholder="Search products"
          value={text}
          onChange={onChange}
        />
        {/* <input type="submit" value="Search" className="btn-success btn-block" disabled={!text && 'disabled'} /> */}
      </form>
      {/* {products.length > 0 && (
        <button
          className="btn btn-light btn-block btn-clear"          
          onClick={clearProducts}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
