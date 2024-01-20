import styles from "./Form.module.css";

import { useState } from "react";
const Form = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email is provided before handling the form submission
    if (email.trim() === "") {
      console.log("Please provide an email before submitting the form.");
      // You can add further handling or show a message to the user
      return;
    }

    // Handle the form submission (e.g., send it to a server, log it, etc.)
    console.log("Form submitted!");
    console.log("Email provided:", email);
    // You can add further logic here, such as sending form data to a server
  };
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
        />

        <div className={styles.checkboxContainer}>
          <label htmlFor="subscribe" className={styles.label}>
            Subscribe
          </label>
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            className={styles.checkbox}
          />
        </div>

        <button
          type="submit"
          className={`${styles.button} ${
            email.trim() === "" ? styles.dull : ""
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
