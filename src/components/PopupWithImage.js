import React from 'react';

function PopupWithImage() {
  return (
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
  );
}

export default PopupWithImage;