import { Link } from 'react-router-dom';
import drawStars from "../../utils";

const ProductItem = ({ product: { imageUrl, id, name, finalRating, amountRatings } }) => {
  return (
    <div className="card text-center">
      <h3 className='p'>{name}</h3>
      <div title={`${finalRating} out 5`} className='p'>{drawStars(finalRating, amountRatings )}</div>

      <img
        src={imageUrl}
        alt=""
        className="full-img"
      />
      <div>
        <Link to={`/product/${id}`} className="btn btn-dark btn-sm my-1">
        For more details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
