import { useProductsRatingsContext } from '../../context/productsRatings/ProductsRatingsContext';

import { Spinner, ProductItem } from '..';

const Products = () => {
  const { loading, productsFilter } = useProductsRatingsContext();
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {productsFilter.map(product => (
          < ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default Products;
