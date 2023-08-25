import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const RegisterModal = (props) => {
  const { values, handleChange } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    props.handleRegister({
      name: values.name,
      avatar: values.avatar,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm
      title="Sign up"
      modalName="register"
      buttonText={props.isLoading ? "Signing up" : "Next"}
      handleSubmit={handleSubmit}
      onClose={props.onClose}
      setActiveModal={props.setActiveModal}
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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          onChange={handleChange}
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
          value={values.name}
          onChange={handleChange}
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
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </div>
      <div className="modal__error">{props.error}</div>
    </ModalWithForm>
  );
};

export default RegisterModal;
