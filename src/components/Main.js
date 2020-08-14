import React from 'react';
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function Main(props) {
    // function handleEditAvatarClick() {
    //   document
    //     .querySelector('.form__change-image')
    //     .classList.add('form_visible');
    // }

    // function handleEditProfileClick() {
    //   document
    //     .querySelector('.form__edit-profile')
    //     .classList.add("form_visible");
    // }

    // function handleAddPlaceClick() {
    //   document.querySelector('.form__add-card')
    //   .classList.add("form_visible");
    // }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <button
              className="profile__image-edit"
              aria-label="Update profile image"
              onClick={props.onEditAvatar}
            ></button>
            <img className="profile__image" src="#" alt="profile-picture" />
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">Linda Kovacs</h1>
              <p className="profile__subtitle">Web Developer</p>
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
      <section className="cards">
        <ul className="cards__grid">{/* Template cards */}</ul>
      </section>

      {/* Edit profile */}
      <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        isOpen={props.isEditProfilePopupOpen}
      >
        <fieldset className="form__fields">
          <label for="name-input">
            <input
              type="text"
              className="form__input form__title"
              id="name-input"
              name="name"
              placeholder="Name"
              value="Jacques Cousteau"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="form__input-error" id="name-input-error"></span>
          </label>
          <label for="job-input">
            <input
              type="text"
              className="form__input form__subtitle"
              id="job-input"
              name="job"
              placeholder="Job"
              value="Explorer"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="form__input-error" id="job-input-error"></span>
          </label>
          <button
            className="form__submit-button"
            type="submit"
            value="Save"
            aria-label="Save button"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>

      {/* Add new place */}
      <PopupWithForm
        name="add-card"
        title="New place"
        isOpen={props.isAddPlacePopupOpen}
      >
        <fieldset className="form__fields">
          <label for="card-input">
            <input
              type="text"
              className="form__input form__card-title"
              id="card-input"
              name="title"
              placeholder="Title"
              value=""
              minlength="1"
              maxlength="30"
              required
            />
            <span className="form__input-error" id="card-input-error"></span>
          </label>
          <label for="link-input">
            <input
              type="url"
              className="form__input form__image-link"
              id="link-input"
              name="link"
              placeholder="Image link"
              value=""
              required
            />
            <span className="form__input-error" id="link-input-error"></span>
          </label>
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
      <PopupWithForm name="delete-image" title="Are you sure?" isOpen={false}>
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

      {/* Change profile picture */}
      <PopupWithForm
        name="change-image"
        title="Change profile picture"
        isOpen={props.isEditAvatarPopupOpen}
      >
        <fieldset className="form__fields">
          <label for="linkImage-input">
            <input
              type="url"
              className="form__input form__image-link"
              id="linkImage-input"
              name="imageLink"
              placeholder="Image link"
              value=""
              required
            />
            <span
              className="form__input-error"
              id="linkImage-input-error"
            ></span>
          </label>
          <button
            className="form__submit-button"
            type="submit"
            value="Save"
            aria-label="Save button"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>

      {/* Open image */}
      <PopupWithImage />

      {/* Template cards */}
      <template className="card-template">
        <li className="card">
          <div className="card__container">
            <button
              type="button"
              className="card__delete-button"
              aria-label="Delete button"
            ></button>
            <div className="card__image"></div>
            <div className="card__text">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button
                  type="button"
                  className="card__like-button"
                  aria-label="Like button"
                ></button>
                <p className="card__like-counter"></p>
              </div>
            </div>
          </div>
        </li>
      </template>
    </main>
  );
}
export default Main;
