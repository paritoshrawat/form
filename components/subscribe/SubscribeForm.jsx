import "./SubscribeForm.css";
const SubscribeForm = () => {
  return (
    <div className="subscribe-container">
      <label htmlFor="subscribe">Subscribe</label>
      <input type="checkbox" id="subscribe" name="subscribe" />
    </div>
  );
};

export default SubscribeForm;
