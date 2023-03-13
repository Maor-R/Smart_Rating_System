import {React, useState, useEffect} from 'react'
import useInput from "../../hooks/useInput";
import { useProductsRatingsContext } from "../../context/productsRatings/ProductsRatingsContext";
import { useAlertGlobalContext } from "../../context/alert/AlertContext";
import { SUCCESS_ADD_ATTRIBUTE_MSG, SUCCESS_TIME_ALERT } from "../../constants";

function AddRating({ setChoseAdd}) {
  const { product, updateAttributeRatingProducts } = useProductsRatingsContext();
  const { setAlert } = useAlertGlobalContext();

  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const {
    value: newAttributeRating,
    setValue: setNewAttributeRating,
    error: newAttributeRatingError,
    handleChange: newAttributeRatingChange,
    handleBlur: newAttributeRatingBlur,
    setError:setNewAttributeRatingError
  } = useInput("Please enter a attribute ", setError);

const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)
  
useEffect(() => {

  setDisableSubmitBtn(newAttributeRating!==""?false:true);

}, [newAttributeRating]);

const handleSubmit =async(e)=>{
  e.preventDefault();

   const attrExist = Object.entries(product.ratings).some((rating)=> rating[0].toLowerCase()===newAttributeRating.toLowerCase() )
 
   if(!attrExist){
     await updateAttributeRatingProducts(newAttributeRating, product.category, product.id);

   }
   else{
    setNewAttributeRatingError
    ({
      isError: true,
      message:"The attribute exists, enter another attribute",
    })}

    setTimeout(() => {
      setAlert(SUCCESS_ADD_ATTRIBUTE_MSG, "success", SUCCESS_TIME_ALERT);
      setChoseAdd(false);
    }, 500);
    }

    return (
        <div  className='form-add-item card text-center attr-box ratings  '>
          <p className='m-b font-bold'>Add a New Attribute Rating</p>
          <div className={`form-row ${newAttributeRatingError.isError && "error"}`}>
          <textarea type="text"
          id="newAttributeRating"
          name="newAttributeRating"
          value={newAttributeRating}
          onChange={newAttributeRatingChange}
          onBlur={newAttributeRatingBlur}
          maxLength="25"
          className={`form-input  ${newAttributeRatingError.isError && "error"}`}
          style={{width:'90%'}}
          
          />
          </div>
          {newAttributeRatingError.isError && <small>{newAttributeRatingError.message}</small>}
          <a
        className={`btn btn-dark  m-3 ${disableSubmitBtn? 'disabled':''}`}
        target="_blank"
        rel="noreferrer"
        onClick={handleSubmit}
      >
        Submit New Attribute
      </a>
        </div>
      );
  
}

export default AddRating