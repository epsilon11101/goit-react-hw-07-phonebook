import { Outlet } from "react-router-dom";
import Contacts from "../components/contacts/Contacts";

const DirectoryRoot = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Contacts />
      <Outlet />
    </div>
  );
};

export default DirectoryRoot;
