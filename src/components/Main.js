import React from 'react';

function Main() {
    // handleEditAvatarClick;
    // handleEditProfileClick;
    // handleAddPlaceClick;
    function handleEditAvatarClick() {
      document
        .querySelector('.form--change-image')
        .classList.add('form_visible');
    }

    function handleEditProfileClick() {
      document
        .querySelector('.form__edit-profile')
        .classList.add("form_visible");
    }

    function handleAddPlaceClick() {
      document.querySelector('.form__add-card')
      .classList.add("form_visible");
    }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            {/* <div className="profile__image-edit"></div> */}
            <button
              className="profile__image-edit"
              aria-label="Update profile image"
              onClick={handleEditAvatarClick}
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
              onClick={handleEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          className="button profile__add-button"
          aria-label="Add button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__grid">{/* Template cards */}</ul>
      </section>

      {/* Edit profile */}
      <section className="form form__edit-profile">
        <form
          className="form__container"
          name="form__edit-profile"
          action="#"
          novalidate
        >
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <h2 className="form__header">Edit profile</h2>
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
        </form>
      </section>

      {/* Add new place */}
      <section className="form form__add-card">
        <form
          className="form__container"
          name="form__add-card"
          action="#"
          novalidate
        >
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <h2 className="form__header">New Place</h2>
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
        </form>
      </section>

      {/* Open image */}
      <div className="form form__add-image">
        <div className="form__open-image">
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <img src="#" alt="" className="form__image" />
          <p className="form__image-title"></p>
        </div>
      </div>

      {/* Delete card */}
      <div className="form form--delete-image">
        <form className="form__container" name="delete-image" novalidate>
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <h2 className="form__header">Are you sure?</h2>
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
        </form>
      </div>

      {/* Change profile picture */}
      <div className="form form--change-image">
        <form className="form__container" name="change-image" novalidate>
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <h2 className="form__header">Change profile picture</h2>
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
        </form>
      </div>

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
