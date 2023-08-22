import React, { useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    props.handleLogin({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <ModalWithForm
      title="Log in"
      modalName="login"
      buttonText="Log in"
      handleSubmit={handleSubmit}
      onClose={props.onClose}
      setActiveModal={props.setActiveModal}
    >
      <div className="input__group">
        <label className="input__label" htmlFor="email">
          Email
        </label>
        <input
          className="input__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <label className="input__label" htmlFor="password">
          Password
        </label>
        <input
          className="input__input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </div>
      <div className="modal__error">{props.error}</div>
    </ModalWithForm>
  );
};

export default LoginModal;
