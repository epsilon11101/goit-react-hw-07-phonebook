import { useState, useRef, useEffect } from "react";
import css from "./Form.module.css";
import avatarImg from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  addNewContact,
  addContactImage,
  editContact,
  deleteContact,
} from "../../store/contactsThunk";
import { getContactSelector } from "../../store/contactsSelectors";
import { contactActions } from "../../store/contactsSlice";

const Form = ({ addContact }) => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [uploadContact, setUploadContact] = useState(false);
  const [selectedImg, setSelectedImg] = useState(avatarImg);
  const [disableInput, setDisableInput] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const contact = useSelector(getContactSelector);
  const { name, avatar } = contact;

  //run first time when component is mounted
  //show contact info if we are selected contact

  useEffect(() => {
    if (!addContact) {
      setFormData(contact);
    }
  }, [contact]);

  //run when we click on submit button
  useEffect(() => {
    if (uploadContact) {
      dispatch(addNewContact(contact));
      redirect("/directory");
    }
  }, [contact, dispatch]);

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  //run when we select image
  const onImageChangeHandler = (e) => {
    if (addContact) {
      const userFile = URL.createObjectURL(e.target.files[0]);
      setSelectedImg(userFile);
      dispatch(addContactImage(e.target.files[0]));
    }
  };

  //run when we click on submit button
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (addContact) {
      console.log(contact.avatar);
      dispatch(contactActions.setContact({ ...contact, ...formData }));
      setUploadContact(true);
      return;
    }

    dispatch(editContact({ ...contact, ...formData }));
    setDisableInput(true);
  };

  const editInputsHandler = () => {
    setDisableInput(!disableInput);
  };

  const deleteContactHandler = () => {
    dispatch(deleteContact(contact.id));
    redirect("/directory");
  };

  return (
    <form className={css.contactWrapper} onSubmit={onSubmitHandler}>
      {!addContact && (
        <div className={css.iconContainer}>
          <div className={css.contactEdit} onClick={editInputsHandler}>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className={css.contactEdit} onClick={deleteContactHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      )}
      <div className={css.contactInfo}>
        <input
          type="file"
          autoComplete="off"
          id="image"
          name="image"
          accept="image/*"
          onChange={onImageChangeHandler}
          style={{ display: "none" }}
          ref={fileInputRef}
          disabled={!addContact}
        />
        {(!addContact && (
          <img
            src={avatar || avatarImg}
            alt="contact image"
            className={css.avatar}
            onClick={() => fileInputRef.current.click()}
          />
        )) || (
          <img
            src={selectedImg || avatarImg}
            alt="contact image"
            className={css.avatar}
            onClick={() => fileInputRef.current.click()}
          />
        )}

        {!addContact && <p>{name || "NO NAME"}</p>}
      </div>
      <div className={css.form}>
        <label htmlFor="name">Full Name</label>
        <input
          onChange={onChangeHandler}
          required
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name || ""}
          disabled={disableInput && !addContact}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={onChangeHandler}
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email || ""}
          disabled={disableInput && !addContact}
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={onChangeHandler}
          required
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address || ""}
          disabled={disableInput && !addContact}
        />
        <label htmlFor="phone">Phone</label>
        <input
          onChange={onChangeHandler}
          required
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone || ""}
          disabled={disableInput && !addContact}
        />
        <button
          type="submit"
          value="Submit"
          className={!addContact && disableInput ? css.disabled : ""}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
