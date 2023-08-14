import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = () => {
  return (
    <div>
      <ModalWithForm title="Log in" modalName="login" buttonText="Log in">
        <div className="input__group">
          <label className="input__label" htmlFor="email">
            Email:
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
            Password:
          </label>
          <input
            className="input__input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
      </ModalWithForm>
    </div>
  );
};

export default LoginModal;
