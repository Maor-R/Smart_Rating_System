import RatingItem from './RatingItem';

const Ratings = ({ ratings }) => {
  return (
    <div  className='grid-4 grid-4-template-col-auto '>
      {Object.entries(ratings).map(rating => (
        <RatingItem rating={rating}  />
      ))}
    </div>
  );
};

export default Ratings;
