import React from 'react'
import starEmpty from "../assets/star-empty.png";
import starfilled from "../assets/star-filled.png";

function Star(props) {
      let starIcon = props.isfilled ? starfilled : starEmpty;
  return (
    <div>
      <button 
      onClick={props.handleClick}
        aria-pressed={props.isfilled}
        aria-label={
          props.isfilled ? "Remove from favorites" : "Add to favorites"
        }
        className="favorite-button border-none bg-transparent active:transform-none active:shadow-none"
      >
        <img
          src={starIcon}
          alt={props.isfilled ? "filled star icon" : "empty star icon"}
          className="favorite w-[25px] cursor-pointer"
        />
      </button>
    </div>
  );
}

export default Star
