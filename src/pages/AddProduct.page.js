import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";
import { Alert } from "../components";
import { useAlertGlobalContext } from '../context/alert/AlertContext';

function AddProduct() {
  const navigate = useNavigate();
  const { setAlert } = useAlertGlobalContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    officialWebsite:"",
    imageUrl: "",
    rangePrice: [],
    Rating: null,
    amountRatings:null,
    ratings:{ 
        "CPU": {
          "rating": null,
          "amount": null
        },
        "GPU": {
          "rating": null,
          "amount": null
        },
        "RAM": {
          "rating": null,
          "amount": null
        },
        "SSD": {
          "rating": null,
          "amount": null
        },
        "Battery": {
          "rating": null,
          "amount": null
        },
        "Camera": {
          "rating": null,
          "amount": null
        },
        "Display": {
          "rating": null,
          "amount": null
        },
        "Portability": {
          "rating": null,
          "amount": null
        },
        "Build Quality": {
          "rating": null,
          "amount": null
        },
        "Value for Money": {
          "rating": null,
          "amount": null
        }
      
      }
  });
  const [error, setError] = useState({
    // isError: false,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/products", formData);
      
      //   navigate("/products");
    } catch (error) {
      console.error(error);
      setError({
        // isError: true,
        message: error.response.data.message,
      });
    } finally {
      // window.location.reload();
    }
      setAlert('The product has been added successfully', 'success', 10);
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false)
      }, 1000*10);

  };



  return (
    <>
      <button onClick={() => navigate("/")} className="btn btn-dark m-l">
        Back
      </button>

      <div className="form-add-item">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            maxLength="40"
            placeholder="title"
            value={formData.name}
            onChange={handleChange}
          />

          <textarea
            type="text"
            name="description"
            maxLength="400"
            placeholder="description &#10;add a comma (',') for a new line"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="officialWebsite"
            maxLength="400"
            placeholder="official website"
            value={formData.officialWebsite}
            onChange={handleChange}
          />

          <input
            type="text"
            name="imageUrl"
            maxLength="400"
            placeholder="url to image"
            value={formData.imageUrl}
            onChange={handleChange}
          />

          <input
            type="number"
            name="rangePriceFrom"
            maxLength="9"
            min={1}
            placeholder="(from) price"
            value={formData.rangePrice[0]}
            onChange={handleChange}
          />

          <input
            type="number"
            name="rangePriceTo"
            maxLength="9"
            min={1}
            placeholder="(to) price"
            value={formData.rangePrice[1]}
            onChange={handleChange}
          />

          {/* {error.isError && (
              <Message variant="danger" dismissible={false}>
                {error.message}
              </Message>
            )} */}

        <input disabled={isDisabled} name="submit" type="submit" value="Add product" className="btn-success btn-block p m-t"  />

          {/* <button variant="primary" type="submit">
            Add product
          </button> */}
        </form>        

      </div>
    </>
  );
}

export default AddProduct;
