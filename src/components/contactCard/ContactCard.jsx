import UserProfile from "./UserProfile";
import css from "./ContactCard.module.css";
import avatar from "../../assets/avatar.png";
import { useParams } from "react-router-dom";

const ContactCard = () => {
  const { contactId } = useParams();
  return <UserProfile name={contactId} src={avatar} />;
};

export default ContactCard;
