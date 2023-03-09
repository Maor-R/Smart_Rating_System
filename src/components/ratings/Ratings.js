import { v4 as uuidv4 } from 'uuid';

import RatingItem from './RatingItem';

const Ratings = ({ ratings }) => {
  return (
    <div  className='grid-4 grid-4-template-col-auto ratings '>
      {Object.entries(ratings).map(rating => (
        <RatingItem key={uuidv4()} rating={rating}  />
      ))}
    </div>
  );
};

export default Ratings;
