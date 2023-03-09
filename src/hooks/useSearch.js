import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProductsRatingsContext } from "../context/productsRatings/ProductsRatingsContext";
import { useAlertGlobalContext } from "../context/alert/AlertContext";

import { MS_1000, NO_RESULT_MSG, FILL_FIELD_MSG, DANGER_TIME_ALERT, DEFAULT_TIME_ALERT } from "../constants";

const useSearch = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { getProductsFilter, productsFilter, clearProductsFilter } = useProductsRatingsContext();
  const { setAlert } = useAlertGlobalContext();

  const waitAndNavigate =(timeToWait) =>{
  setTimeout(() => {
    navigate("/");
  }, MS_1000 * timeToWait);
}


  const onChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    navigate("/search_product");
    if (productsFilter) {
      clearProductsFilter();
    }

    if (text === "") {
      setAlert(FILL_FIELD_MSG, "warning");
      waitAndNavigate(DEFAULT_TIME_ALERT)
    } else {

      const res = await getProductsFilter(text);

      if (res.length === 0) {
        setAlert(NO_RESULT_MSG, "danger", DANGER_TIME_ALERT);
        waitAndNavigate(DANGER_TIME_ALERT)
      }
    }
  };

  return {
    text,
    onSubmit,
    onChange,
  };
};

export default useSearch;
