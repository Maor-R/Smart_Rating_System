import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useProductsRatingsContext } from '../context/productsRatings/ProductsRatingsContext';
import { useAlertGlobalContext } from '../context/alert/AlertContext';

import { NO_RESULT_MSG, FILL_FIELD_MSG } from '../constants';

const useSearch = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { getProducts } = useProductsRatingsContext();
  const { setAlert } = useAlertGlobalContext();

  const onChange = e => {
    setText(e.target.value);
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (text === '') {
      setAlert(FILL_FIELD_MSG, 'warning');
    } else {
      const res = await getProducts(text);
      navigate("/search_product");

      if (res.length === 0) {
        setAlert(NO_RESULT_MSG, 'danger', 2.5);
      }
    }
  };

  return {
    text,
    onSubmit,
    onChange
  };
};

export default useSearch;