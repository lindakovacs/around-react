import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <section
        className={`form form__${props.name} ${
          props.isOpen ? "form_visible" : ""
        }`}
      >
        <form
          className="form__container"
          name={`form__${props.name}`}
          action="#"
          novalidate
        >
          <button
            className="form__reset-button"
            type="reset"
            aria-label="Close button"
          ></button>
          <h2 className="form__header">{props.title}</h2>
          {props.children}
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;