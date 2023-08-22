import React, { useContext, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = (props) => {
  const currentUser = useContext(CurrentUserContext);

  const avatarRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    props.handleUpdateUser({
      name: nameRef.current.value,
      avatar: avatarRef.current.value,
      _id: currentUser.data._id,
    });
    currentUser.data.name = nameRef.current.value;
    currentUser.data.avatar = avatarRef.current.value;
  };

  return (
    <ModalWithForm
      title="Change profile data"
      modalName="edit-profile"
      buttonText="Save changes"
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
          defaultValue={currentUser.data.name}
          ref={nameRef}
        />

        <label className="input__label" htmlFor="avatar">
          Avatar
        </label>
        <input
          className="input__input"
          type="url"
          name="avatar"
          defaultValue={currentUser.data.avatar}
          required
          ref={avatarRef}
        />
      </div>
      <div className="modal__error">{props.error}</div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
