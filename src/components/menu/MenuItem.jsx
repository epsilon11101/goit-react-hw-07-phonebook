import css from "./MenuItem.module.css";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link }) => {
  return (
    <div className={css.subMenu}>
      <Link
        to={link}
        end="true"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "1.2rem",
        }}
      >
        {title}
      </Link>
    </div>
  );
};

export default MenuItem;
