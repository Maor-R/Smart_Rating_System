const drawStars = (ratings, amountRatings) => {
    
  let stars = [];
  let diff = 5 - ratings;
  let i = ratings;
  while (i >= 1) {
    stars.push(<span class="star on"></span>);
    i--;
  }
  if (i > 0) {
    stars.push(<span class="star half"></span>);
  }
  while (diff >= 1) {
    stars.push(<span class="star"></span>);
    diff--;
  }

  stars.push(<p>{amountRatings} ratings</p>);


  return stars;
};

export default drawStars;