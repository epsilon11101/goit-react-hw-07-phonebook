import UserForm from "./UserForm";
import css from "./UserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ name, src }) => {
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactEdit}>
        <FontAwesomeIcon icon={faPen} />
      </div>
      <div className={css.contactInfo}>
        <img src={src} alt="contact image" className={css.avatar} />
        <p>{name}</p>
      </div>
      <div className={css.userForm}>
        <UserForm />
      </div>
    </div>
  );
};

export default UserProfile;
