import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const EditProfileModal = (props) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange } = useForm({
    name: currentUser.data.name,
    avatar: currentUser.data.avatar,
  });

  const handleSubmit = (e) => {
    props.handleUpdateUser({
      name: values.name,
      avatar: values.avatar,
      _id: currentUser.data._id,
    });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      modalName="edit-profile"
      buttonText={props.isLoading ? "Saving..." : "Save changes"}
      handleSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <div className="input__group">
        <label className="input__label" htmlFor="name">
          Name&#x2a;
        </label>
        <input
          className="input__input"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
          value={values.name}
          onChange={handleChange}
        />

        <label className="input__label" htmlFor="avatar">
          Avatar
        </label>
        <input
          className="input__input"
          type="url"
          name="avatar"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </div>
      <div className="modal__error">{props.error}</div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
