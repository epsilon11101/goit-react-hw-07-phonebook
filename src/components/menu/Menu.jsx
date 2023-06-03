import css from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={css.MenuWrapper}>
      <div className={css.menuTitle}>
        <p>Directory</p>
        <MenuItem title="all contacts" link="/directory" />
        <MenuItem title="add contact" link="/addContact" />
      </div>
    </div>
  );
};

export default Menu;
