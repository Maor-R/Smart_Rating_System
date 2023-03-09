import { React } from "react";
import { FormRow } from "../components";
import useAddProduct from "../hooks/useAddProduct";

function AddProduct() {

  const {
    category,
    categoryError,
    handleCategoryChange,
    handleCategoryBlur,
    name,
    nameError,
    handleNameChange,
    handleNameBlur,
    description,
    descriptionError,
    handleDescriptionChange,
    handleDescriptionBlur,
    officialWebsite,
    officialWebsiteError,
    handleOfficialWebsiteChange,
    handleOfficialWebsiteBlur,
    imageUrl,
    imageUrlError,
    handleImageUrlChange,
    handleImageUrlBlur,
    price,
    priceError,
    handlePriceChange,
    handlePriceBlur,
    handleSubmit,
    isDisabled,
  } = useAddProduct();

  return (
    <>
      <h2 className="text-center p-b m-1">Add new product</h2>
      <div className="form-add-item card text-center ">
        <form onSubmit={handleSubmit}>

        <div className={`form-row ${categoryError.isError && "error"}`}>
        <select 
            name="category"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            onBlur={handleCategoryBlur}
            className={`form-input ${categoryError.isError && "error"}`}
            >

            <option value='' >Select Category</option>
              <option value="Laptops">Laptop</option>
              <option value="Routers">Routers</option>
              <option value="Printers">Printers</option>
            </select>
          </div>
          {categoryError.isError && <small>{categoryError.message}</small>}

          {/* name field */}
          <FormRow
            error={nameError.isError}
            type="text"
            name="name"
            id="name"
            maxLength="40"
            placeholder="Title"
            value={name}
            handleChange={handleNameChange}
            handleBlur={handleNameBlur}
            message={nameError.message}
          />
          <div className={`form-row ${descriptionError.isError && "error"}`}>
            
            {/* description field */}

            <textarea
              type="text"
              name="description"
              id="description"
              maxLength="400"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
              className={`form-input ${descriptionError.isError && "error"}`}
            />
          </div>
          {descriptionError.isError && (
            <small>{descriptionError.message}</small>
          )}

          {/* officialWebsite field */}
          <FormRow
            error={officialWebsiteError.isError}
            type="text"
            name="officialWebsite"
            id="officialWebsite"
            maxLength="400"
            placeholder="Link to official website"
            value={officialWebsite}
            handleChange={handleOfficialWebsiteChange}
            handleBlur={handleOfficialWebsiteBlur}
            message={officialWebsiteError.message}
          />

          {/* imageUrl field */}
          <FormRow
            error={imageUrlError.isError}
            type="text"
            name="imageUrl"
            id="imageUrl"
            maxLength="400"
            placeholder="Link to image"
            value={imageUrl}
            handleChange={handleImageUrlChange}
            handleBlur={handleImageUrlBlur}
            message={imageUrlError.message}
          />
          {/* price field */}

          <div className={`form-row ${priceError.isError && "error"}`}>
            <input
              error={priceError.isError}
              type="number"
              name="price" 
              id="price"
              maxLength="9"
              min={1}
              placeholder="Recommended price"
              value={price}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
              className={`form-input ${priceError.isError && "error"}`}
            />
          </div>
          {priceError.isError && <small>{priceError.message}</small>}

          <input
            disabled={isDisabled}
            name="submit"
            type="submit"
            value={isDisabled ? 'Waiting...' : "Add Product"}   
            className="btn-success btn-block p m-t"
          />
        </form>
      </div>
    </>
  );
}

export default AddProduct;
