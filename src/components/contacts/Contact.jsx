import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

const Contact = ({ name, clickEvent }) => {
  return (
    <li className={styles.link} onClick={clickEvent}>
      <Link to={name} className={styles.links}>
        {name}
      </Link>
    </li>
  );
};

export default Contact;
