/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Spinner, Ratings } from "../components";
import { useProductsRatingsContext } from "../context/productsRatings/ProductsRatingsContext";
import drawStars from "../utils";

const Product = () => {
  const {
    getProduct,
    product,
    loading,
  } = useProductsRatingsContext();

  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);

  const {
    name,
    description,
    officialWebsite,
    ratings,
    finalRating,
    amountRatings,
    rangePrice,
    imageUrl,
  } = product;


  if (loading) return <Spinner />;

  return (
    <>
      <Link
        to="/search_product"
        className="btn btn-dark"
        style={{ marginLeft: "2rem" }}
      >
        Back to result
      </Link>
      <div className="m-2">
        <div className="card grid-2">
          <div className="all-center">
            <h2>{name}</h2>
            <div title={`${finalRating} out 5`} className="p">
              {drawStars(finalRating, amountRatings)}
            </div>
            <img src={imageUrl} className="full-img" alt={`product-${name}`} />
            {description !== undefined && (
              <ul className="p-1 text-left" style={{ listStyleType: "square" }}>
                {description.split(",").map((item) => (
                  <li>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            )}
            {rangePrice !== undefined && (
              <h3 className="text-center">{`$${rangePrice[0]} - $${rangePrice[1]}`}</h3>
            )}{" "}
          </div>

          <div className="all-center text-left">
            {ratings !== undefined && <Ratings ratings={ratings} />}

            <a
              href={officialWebsite}
              className="btn btn-dark  m-3"
              target="_blank"
              rel="noreferrer"
            >
              Visit official website
            </a>
          </div>
        </div>
        {/* <div className="card text-center">
          {badges.map((badge) => (
            <Badge key={badge.type} {...badge} />
          ))}
        </div> */}
        {/* <Products products={products} /> */}
      </div>
    </>
  );
};

export default Product;
