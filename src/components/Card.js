import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Checking if you are the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_active" : ""
  }`;

  // Check if the card was liked by the current user
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const likesNumber = props.card.likes.length;

  function handleCardClick() {
    props.onCardClick(props.card);	        
  }

  function handleLikeClick(e) {
      e.stopPropagation();
      e.preventDefault();
      props.onCardLike(props.card);
  }

  function handleCardDelete(e) {
      e.stopPropagation();
      e.preventDefault();
      props.onCardDelete(props.card);
  }

  return (
    <>
      <li key={props.card._id} className="card">
        <div className="card__container">
          <button
            type="button"
            // className="card__delete-button"
            aria-label="Delete button"
            className={cardDeleteButtonClassName}
            onClick={handleCardDelete}
          ></button>
          <div
            className="card__image"
            style={{ backgroundImage: `url(${props.card.link})` }}
            // onClick={() => {
            //   props.onCardClick(props.card);
            // }}
            onClick={handleCardClick}
          ></div>
          <div className="card__text">
            <h2 className="card__title">{props.card.name}</h2>
            <div className="card__like-container">
              <button
                type="button"
                // className="card__like-button"
                aria-label="Like button"
                className={cardLikeButtonClassName}
                onClick={handleLikeClick}
              ></button>
              <p className="card__like-counter">{likesNumber}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
