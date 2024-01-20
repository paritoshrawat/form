import ChompForm from "../components/ChompForm/ChompForm";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import Form from "../components/Form";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React form</h1>
      <ChompForm />
      <FeedbackForm />

      <Form />
    </div>
  );
}

export default App;
