import React, { useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    props.handleRegister({
      name: nameRef.current.value,
      avatar: avatarRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div>
      <ModalWithForm
        title="Sign up"
        modalName="register"
        buttonText="Next"
        handleSubmit={handleSubmit}
        onClose={props.onClose}
      >
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
            ref={emailRef}
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
            ref={passwordRef}
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
            ref={nameRef}
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
            ref={avatarRef}
            required
          />
        </div>
      </ModalWithForm>
    </div>
  );
};

export default RegisterModal;
