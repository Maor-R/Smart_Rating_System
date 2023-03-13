// import { useState, useEffect } from "react";
// import useInput from "./useInput";
// import { useAlertGlobalContext } from "../context/alert/AlertContext";
// import { useProductsRatingsContext } from "../context/productsRatings/ProductsRatingsContext";

// import { api } from "../api/api";
// import {
//   MS_1000,
//   SUCCESS_ADD_PRODUCT_MSG,
//   SUCCESS_TIME_ALERT,
//   DEFAULT_TIME_WAITING,
//   LAPTOP_CATEGORY,
//   ROUTERS_CATEGORY,
//   PRINTERS_CATEGORY
// } from "../constants";

// const useAddProduct = () => {
//   const { setAlert } = useAlertGlobalContext();
//   const { getProducts, getProduct } = useProductsRatingsContext();

//   const [isDisabled, setIsDisabled] = useState(false); 

//   const [formData, setFormData] = useState({
//     category:"",
//     name: "",
//     description: "",
//     officialWebsite: "",
//     imageUrl: "",
//     price: null,
//     Rating: null,
//     amountRatings: null,
//     finalRating:null,
//     ratings: null
//   });
//   const [error, setError] = useState({
//     isError: false,
//     message: "",
//   });


//   useEffect(() => {}, [isDisabled]);

//   useEffect(() => {
//     const addProduct = async () => {
//       try {
//         await api.post("/products", formData);
//         getProducts();
//         getProduct()

//       } catch (error) {
//         console.error(error);
//         setError({
//           isError: true,
//           message: error.response.data.message,
//         });
//       } finally {
//       }
//       setIsDisabled(true);


//       const intervalId = setTimeout(() => {
//         setAlert(SUCCESS_ADD_PRODUCT_MSG, "success", SUCCESS_TIME_ALERT);
//         setIsDisabled(false);
//         setValueName('');
//         setValueDescription('');
//         setValueImageUrl('');
//         setValueOfficialWebsite('');
//         setValuePrice('');
//         setValueCategory('');

//         return () => clearInterval(intervalId);
//       }, MS_1000 * DEFAULT_TIME_WAITING);
//     };

//     if (formData.name !== "") 
//     {
//       addProduct();
//     }
//   }, [formData]);

//   let attributes = [];
// for (let i=0 ;i<5; i++) {
//   const {
//     value: attributes,
//     setValue: setValueCategory,
//     error: categoryError,
//     handleChange: handleCategoryChange,
//     handleBlur: handleCategoryBlur,
//   } = useInput("d", setError);
// }


//   const setFormDataAccordingCategory =()=> {
//     let selectCategory = null ;
//     if(category === 'Laptops'){
//       selectCategory = LAPTOP_CATEGORY;
//     }
//     else if(category === 'Routers'){
//       selectCategory = ROUTERS_CATEGORY;
//     }
//     else if(category === 'Printers'){
//       selectCategory = PRINTERS_CATEGORY;
//     }

//     setFormData({
//       ...formData,
//       category,
//       name: name,
//       description: description,
//       officialWebsite: officialWebsite,
//       imageUrl: imageUrl,
//       price: price,
//       ratings: selectCategory
//     });
//   }

//   const handleSubmit = async (event) => {
    
//     event.preventDefault();

//     if (!category|| !name || !description || !officialWebsite || !imageUrl || !price) {
//       setError(true);
//       handleNameBlur();
//       handleDescriptionBlur();
//       handleOfficialWebsiteBlur();
//       handleImageUrlBlur();
//       handlePriceBlur();
//       handleCategoryBlur();
//       return;

//     } else {

//       setFormDataAccordingCategory();


//       setTimeout( () => {
//         setError(false);
//       }, DEFAULT_TIME_WAITING);
//     }
//   };

//   return {
//     attributes,
//     handleSubmit,
//     formData,
//     error,
//   };
// };

// export default useAddProduct;