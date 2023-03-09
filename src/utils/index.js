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
  if (amountRatings > 0) {
    stars.push(<p>{amountRatings} ratings</p>);
  }

  return stars;
};

const getUniqueId =()=>{
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export  {drawStars, getUniqueId};
