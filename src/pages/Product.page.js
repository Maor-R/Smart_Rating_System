/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";

import {
  Spinner,
  Ratings,
  ConfirmAlert,
  EditRatings,
  AddRating,
} from "../components";
import { useProductsRatingsContext } from "../context/productsRatings/ProductsRatingsContext";
import { drawStars } from "../utils";

const Product = () => {
  const navigate = useNavigate();
  const { getProduct, deleteProduct, product, loading } =
    useProductsRatingsContext();
  const [choseDelete, setChoseDelete] = useState(false);
  const [choseEdit, setChoseEdit] = useState(false);
  const [choseAdd, setChoseAdd] = useState(false);

  const { id } = useParams();

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

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleDeleteProduct = () => {
    deleteProduct(id);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  if (loading) return <Spinner />;

  return (
    <>
      <div className="m-2">
        <div className="card grid-2">
          <div>
            <div>
                <div className="">
                  <VscEdit
                    className={choseEdit? 'm-b scale select-btn':'m-b scale'}
                    title="Write a rating"
                    onClick={() => {
                      if (choseAdd === false) {
                        setChoseEdit((prev) => !prev);
                      }
                    }}
                  />
                  <BiMessageSquareAdd
                   className={choseAdd? 'm-b scale m-l select-btn':'m-b scale m-l'}

                    title="Add a new attribute"
                    onClick={() => {
                      if (choseEdit === false) {
                        setChoseAdd((prev) => !prev);
                      }
                    }}
                  />
                  <MdDeleteOutline
                                     className={choseDelete? 'm-l scale m-b select-btn':'m-l scale m-b'}

                    title="Delete product"
                    onClick={() => {
                      setChoseDelete(true);
                    }}
                  />
                </div>
              {choseDelete && (
                <ConfirmAlert
                  handleDeleteProduct={handleDeleteProduct}
                  setChoseDelete={setChoseDelete}
                />
              )}
            </div>

            <div className="all-center">
              <h2>{name} </h2>
              <div
                title={`${Number(finalRating).toFixed(2)} out 5`}
                className="p"
              >
                {drawStars(finalRating, amountRatings)}
              </div>
              <img
                src={imageUrl}
                className="full-img"
                alt={`product-${name}`}
              />
              {description !== undefined && (
                <ul
                  className="p-1 text-left"
                  style={{ listStyleType: "square" }}
                >
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
          </div>



          <div>
            <div className="all-center">
              {!choseEdit && !choseAdd && ratings !== undefined && (
                <Ratings ratings={ratings} />
              )}
              {choseEdit && !choseAdd && (
                <EditRatings categories={ratings} setChoseEdit={setChoseEdit} />
              )}
              {choseAdd && !choseEdit && (
                <AddRating setChoseAdd={setChoseAdd} />
              )}

              {!choseAdd && !choseEdit && (
                <a
                  href={officialWebsite}
                  className="btn btn-dark  m-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit official website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
