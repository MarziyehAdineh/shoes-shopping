import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ValueRating = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ValueRating}
              onClick={() => {setRating(ValueRating)}}/>
            <FaStar
              className="star"
              color={ValueRating <= (rating || hover) ? "gold":"gray"}
              size="20px"
              onMouseEnter={() => setHover(ValueRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );

      })}
              {/* <p >ratig={rating}</p> */}

    </div>
  );
};

export default StarRating;
