import { React, useState } from "react";
import { useProductsRatingsContext } from "../../context/productsRatings/ProductsRatingsContext";
import { useAlertGlobalContext } from "../../context/alert/AlertContext";

import { SUCCESS_ADD_RATING_MSG, SUCCESS_TIME_ALERT } from "../../constants";

import EditRatingItem from "./EditRatingItem";

function EditRatings({ categories, setChoseEdit }) {
  const { setAlert } = useAlertGlobalContext();

  const [inputValue, setInputValue] = useState({});
  const [disableBtnSubmit, setDisableBtnSubmit] = useState(true);

  const { product, updateRatingProduct } = useProductsRatingsContext();

  const onChangeInput = (value) => {
    const currValue = Number(Object.entries(value)[0][1]);
    const currName = Object.entries(value)[0][0];
    console.log(currName, currValue);

    if (inputValue === {} && currValue === 0) {
      setDisableBtnSubmit(true);
    } else if (currValue !== 0) {
      setDisableBtnSubmit(false);
    } else if (inputValue !== {} && currValue === 0) {
      const emptyRating = Object.entries(inputValue).every(
        (rating) => Number(rating[1]) === 0 || rating[0] === currName
      );
      console.log(emptyRating);
      console.log(inputValue);
      if (emptyRating) {
        setDisableBtnSubmit(true);
      } else {
        setDisableBtnSubmit(false);
      }
    }

    setInputValue({ ...inputValue, ...value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let currRatingsToAdd = {};
    let updatedProduct = product;
    Object.entries(inputValue).forEach((rating) => {
      const newAmount = product.ratings[rating[0]].amount + 1;
      const newRating =
        (Number(rating[1]) +
          product.ratings[rating[0]].rating *
            product.ratings[rating[0]].amount) /
        newAmount;
      currRatingsToAdd[rating[0]] = { rating: newRating, amount: newAmount };
    });

    updatedProduct["ratings"] = {
      ...updatedProduct["ratings"],
      ...currRatingsToAdd,
    };

    let sumRating = 0;
    let sumAmount = 0;

    Object.entries(updatedProduct["ratings"]).forEach((rating) => {
      sumRating += rating[1].rating * rating[1].amount;
      sumAmount += rating[1].amount;
    });
    updatedProduct["finalRating"] = sumRating / sumAmount;
    updatedProduct["amountRatings"] += 1;

    updateRatingProduct(updatedProduct, updatedProduct["id"]);

    setTimeout(() => {
      setAlert(SUCCESS_ADD_RATING_MSG, "success", SUCCESS_TIME_ALERT);
      setChoseEdit(false);
    }, 500);
  };
  return (
    <div>
      <div className="grid-2  ratings">
        {Object.entries(categories).map((category, index) => (
          <EditRatingItem
            key={index}
            category={category}
            onChangeInput={onChangeInput}
          />
        ))}
      </div>
      <a
        className={`btn btn-dark  m-3 ${disableBtnSubmit ? "disabled" : ""}`}
        target="_blank"
        rel="noreferrer"
        onClick={handleSubmit}
      >
        Submit Rating
      </a>
    </div>
  );
}

export default EditRatings;
