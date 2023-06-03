import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";
const RootPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Menu />
      <Outlet />
    </div>
  );
};

export default RootPage;
