import React, { useContext, useState, useRef, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const EditProfileModal = () => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const nameRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(aboutRef.current.value);
  };

  return (
    <div>
      <ModalWithForm title="Edit profile" name="edit-profile" buttonText="Save">
        <form
          className="modal__form"
          name="edit-profile"
          onSubmit={handleUpdateProfile}
        >
          <input
            className="modal__input modal__input_type_name"
            id="name-input"
            type="text"
            name="name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
            value={name}
            ref={nameRef}
          />
          <span className="modal__input-error" id="name-input-error"></span>
          <input
            className="modal__input modal__input_type_about"
            id="about-input"
            type="text"
            name="about"
            placeholder="About me"
            minLength="2"
            maxLength="200"
            required
            value={about}
            ref={aboutRef}
          />
          <span className="modal__input-error" id="about-input-error"></span>
          <button className="modal__submit" type="submit">
            Save
          </button>
        </form>
      </ModalWithForm>
    </div>
  );
};

export default EditProfileModal;
