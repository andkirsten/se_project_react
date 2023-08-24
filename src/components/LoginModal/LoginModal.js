import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const LoginModal = (props) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm
      title="Log in"
      modalName="login"
      buttonText={props.isLoading ? "Logging in..." : "Log in"}
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </div>
      <div className="modal__error">{props.error}</div>
    </ModalWithForm>
  );
};

export default LoginModal;
