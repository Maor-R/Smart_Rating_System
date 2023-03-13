import { useEffect } from "react";
import { useProductsRatingsContext } from "../../context/productsRatings/ProductsRatingsContext";

import { Spinner, ProductItem } from "..";

const TopRatedProducts = () => {
  const { loading, topRatedProducts, getTopRatedProducts } =
    useProductsRatingsContext();

  useEffect(() => {
    if (topRatedProducts.length === 0) {
      getTopRatedProducts();
    }
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {topRatedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default TopRatedProducts;
