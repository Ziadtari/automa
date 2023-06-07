import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const MechanicCard = ({ mechanic }) => {
  const options = {
    value: mechanic.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/mechanic/${mechanic._id}`}>
      <img src={mechanic.avatar.url} alt={mechanic.name} />
      <p>{mechanic.name}</p>
      <div>
        <Rating id="rating" {...options} />
      </div>
      <span>{`RS ${mechanic.rate}`}</span>
    </Link>
  );
};

export default MechanicCard;
