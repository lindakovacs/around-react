import React from 'react';
import api from '../utils/Api'; 
import Card from "./Card";
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  // const [deletedCard, setDeletedCard] = React.useState(null);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Update the state
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function handleCardDelete(deletedCard) {
  //   api
  //     .deleteCard(deletedCard._id)
  //     .then(() => {
  //       const remainingCards = cards.filter(
  //         (card) => card._id !== deletedCard._id
  //       );
  //       setCards(remainingCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  function handleCardDelete(card) {
    // const isOwn = card.owner._id === currentUser._id;
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function handleCardDelete(card) {
  //   api
  //     .deleteCard(card._id)
  //     .then(() => {
  //       const remainingCards = cards.filter(
  //         (c) => c._id !== c._id
  //       );
  //       setCards(remainingCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  React.useEffect(() => {
    setCards(cards);
  }, [cards]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards((cards) => [...cards, ...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <button
              className="profile__image-edit"
              aria-label="Update profile image"
              onClick={props.onEditAvatar}
            ></button>
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="profile-picture"
            />
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button
              className="button profile__edit-button"
              aria-label="Edit button"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="button profile__add-button"
          aria-label="Add button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      {/* Add new place */}
      <PopupWithForm
        name="add-card"
        title="New place"
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.onClose}
      >
        <fieldset className="form__fields">
          <input
            type="text"
            className="form__input form__card-title"
            id="card-input"
            name="title"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="form__input-error" id="card-input-error"></span>
          <input
            type="url"
            className="form__input form__image-link"
            id="link-input"
            name="link"
            placeholder="Image link"
            required
          />
          <span className="form__input-error" id="link-input-error"></span>
          <button
            className="form__submit-button"
            type="submit"
            value="Create"
            aria-label="Create button"
          >
            Create
          </button>
        </fieldset>
      </PopupWithForm>

      {/* Delete card */}
      <PopupWithForm
        name="delete-image"
        title="Are you sure?"
        isOpen={false}
        onClose={props.onClose}
      >
        <fieldset className="form__fields form__fields-delete">
          <button
            className="form__submit-button"
            type="submit"
            value="Yes"
            aria-label="Yes button"
          >
            Yes
          </button>
        </fieldset>
      </PopupWithForm>

      
      {/* Open image */}
      <PopupWithImage onClose={props.onClose} card={props.selectedCard} />

      {/* Template initial cards */}
      <section className="cards">
        <ul className="cards__grid">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
export default Main;
