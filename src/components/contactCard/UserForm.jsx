import { Form } from "react-router-dom";
import css from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Form className={css.form}>
      <label htmlFor="name">Full Name</label>
      <input required type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input required type="email" id="email" name="email" />
      <label htmlFor="address">Address</label>
      <input required type="text" id="address" name="address" />
      <label htmlFor="phone">Phone</label>
      <input required type="text" id="phone" name="phone" />
      <button>Submit</button>
    </Form>
  );
};

export default UserForm;
