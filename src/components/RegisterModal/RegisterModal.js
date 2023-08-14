import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = () => {
  return (
    <div>
      <ModalWithForm title="Sign up" modalName="register" buttonText="Next">
        <div className="input__group">
          <label className="input__label" htmlFor="email">
            Email&#x2a;
          </label>
          <input
            className="input__input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label className="input__label" htmlFor="password">
            Password&#x2a;
          </label>
          <input
            className="input__input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <label className="input__label" htmlFor="name">
            Name&#x2a;
          </label>
          <input
            className="input__input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label className="input__label" htmlFor="avatar">
            Avatar URL&#x2a;
          </label>
          <input
            className="input__input"
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Avatar URL"
            required
          />
        </div>
      </ModalWithForm>
    </div>
  );
};

export default RegisterModal;
