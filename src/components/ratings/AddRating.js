import {React, useState, useEffect} from 'react'
import useInput from "../../hooks/useInput";
import { useProductsRatingsContext } from "../../context/productsRatings/ProductsRatingsContext";


function AddRating({categories}) {
  const { product, getProduct, updateAttributeRatingProducts } = useProductsRatingsContext();

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

// console.log(newAttributeRating);
//  Object.entries(product.ratings).forEach((rating)=> console.log(rating[0]))


   const attrExist = Object.entries(product.ratings).some((rating)=> rating[0].toLowerCase()===newAttributeRating.toLowerCase() )
 
   if(!attrExist){
     await updateAttributeRatingProducts(newAttributeRating, product.category, product.id);
    //  getProduct(product.id)


   }
   else{
    setNewAttributeRatingError
    ({
      isError: true,
      message:"The attribute exists, enter another attribute",
    })}

//MSG THAT OBJ ADD

   
   //  console.log(attrExist)
  // console.log(  Object.entries(product.ratings)[1][0]
  // )
    }

    return (
        <div  className='form-add-item card text-center flex  ratings '>
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