const RatingItem = ({ rating }) => {

  return (
    <>
      <a  style={{ color: "black", paddingLeft: "4.7rem", width: "20rem" }}>
        {rating[0]}{" "}
        <div className="w3-light-grey">
          <div
            className="w3-container w3-green w3-center"
            style={{ width: `${rating[1].rating * 20}%` }}
          >
            {rating[1].rating * 20}%
          </div>
        </div>
      </a>{" "}
      <div>
        <br />({rating[1].amount})
      </div>
    </>
  );
};

export default RatingItem;
