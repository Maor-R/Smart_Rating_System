/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/api";

import { Spinner, Ratings } from "../components";
import { useProductsRatingsContext } from "../context/productsRatings/ProductsRatingsContext";
import {drawStars} from "../utils";

const Product = () => {
  const {
    getProduct,
    getProducts,
    product,
   loading,
  } = useProductsRatingsContext();

  const { id } = useParams();
  // const [product, setProduct] = useState({});
  // const [loading, setLoading] = useState(true);

//   useEffect(() => {
    
//     let res;
//     const getProductById  = async() =>
//     {    
//   try
// {
//    res = await api.get(`/products/${id}`);
//    setProduct(res.data)
//    console.log(res.data)

// }
// catch(error){
//   console.error(error);
// }
// finally{
//   setLoading(false);
// }
// }
// getProductById();
//   }, [id]);

const {
  name,
  description,
  officialWebsite,
  ratings,
  finalRating,
  amountRatings,
  price,
  imageUrl,
} = product;

  useEffect(() => {     
    getProduct(id);

  }, []);


  if (loading) return <Spinner />;

  return (
    <>
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
                {description.split("\n").map((item) => (
                  <li>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            )}
            {price !== undefined && (
              <h3 className="text-center">{`$${price}`}</h3>
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
