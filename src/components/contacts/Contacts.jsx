import css from "./Contacts.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <div className={css.mainWrapper}>
      <div className={css.searchWrapper}>
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search Contact" />
      </div>
      <ul>
        <li>
          <Link to={"rodi albuerne"} className={css.links}>
            rodi albuerne{" "}
          </Link>
        </li>
        <li>
          <Link to={"tania castillo"} className={css.links}>
            tania castillo{" "}
          </Link>
        </li>
        <li>
          <Link to={"jaime garcia"} className={css.links}>
            jaime garcia{" "}
          </Link>
        </li>
        <li>
          <Link to={"christine huag"} className={css.links}>
            christine huag{" "}
          </Link>
        </li>
        <li>
          <Link to={"elton lin"} className={css.links}>
            elton lin{" "}
          </Link>
        </li>
        <li>
          <Link to={"magico martinez"} className={css.links}>
            magico martinez{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
