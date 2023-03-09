import { Link } from "react-router-dom";
import {drawStars} from "../../utils";

const ProductItem = ({
  product: { imageUrl, id, name, finalRating, amountRatings, price },
}) => {
  return (
    <div className="card text-center">
      <Link to={`/product/${id}`} className="">
        <h3 className="p">{name}</h3>
      </Link>

      <div title={`${finalRating} out 5`} className="p">
        { drawStars(finalRating, amountRatings)}
      </div>
      <Link to={`/product/${id}`} className="">
        <img src={imageUrl} alt="" className="full-img" />
      </Link>
      <h3 className="p">${price}</h3>

      <div></div>
    </div>
  );
};

export default ProductItem;
