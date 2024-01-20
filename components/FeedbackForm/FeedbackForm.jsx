// FeedbackForm.js
import { useState } from "react";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the feedback data (e.g., send it to a server, log it, etc.)
    console.log("Feedback submitted:", feedback);
    // You can add further logic here, such as sending feedback to a server
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="feedback" className={styles.label}>
        Please provide your feedback:
      </label>
      <div className={styles.textareaContainer}>
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          required
          className={styles.textarea}
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
