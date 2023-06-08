import css from "./Contacts.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, filterByName } from "../../store/contactsThunk";
import {
  getContactsSelector,
  getContactsLoadingSelector,
  getContactsErrorSelector,
} from "../../store/contactsSelectors";

import { contactActions } from "../../store/contactsSlice";

import { useEffect } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContactsSelector);
  const isLoading = useSelector(getContactsLoadingSelector);
  const error = useSelector(getContactsErrorSelector);

  const onContactSelected = (contact) => {
    dispatch(contactActions.setContact(contact));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getContacts = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return allContacts.map(({ id, name, email, address, phone, avatar }) => {
      const contact = { id, name, email, address, phone, avatar };
      return (
        <Contact
          key={id}
          name={name}
          clickEvent={onContactSelected.bind(this, contact)}
        />
      );
    });
  };

  const searchContactHandler = (e) => {
    dispatch(filterByName(e.target.value));
  };

  return (
    <div className={css.mainWrapper}>
      <div className={css.searchWrapper}>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="search"
          placeholder="Search Contact"
          onChange={searchContactHandler}
        />
      </div>
      <ul>{getContacts()}</ul>
    </div>
  );
};

export default Contacts;
