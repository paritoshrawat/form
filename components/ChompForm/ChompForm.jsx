// ChompForm.js
import { useState, useRef, useEffect } from "react";
import "./ChompForm.css"; // Import your CSS file

const ChompForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClosed, setIsClosed] = useState(false);
  const mouthRef = useRef();

  useEffect(() => {
    const chomp = () => {
      setIsClosed(!isClosed);
    };

    const makeChomper = (inputElement) => {
      const parent = inputElement.parentElement;
      const wrapper = document.createElement("div");
      wrapper.innerHTML = getTemplate();
      const newElem = wrapper.firstChild;
      wrapper.remove();

      inputElement.addEventListener("click", () => {
        if (!isClosed) {
          chomp();
        }
      });

      newElem.getElementsByClassName("top-teeth")[0].after(inputElement);
      parent.appendChild(newElem);
    };

    const getTeeth = (num) => {
      let teeth = "";
      for (let i = 0; i < num; i++) {
        teeth += `<div class="tooth" style="height: ${getRandomHeight()}px"></div>`;
      }
      return teeth;
    };

    const getRandomHeight = () => {
      return Math.floor(Math.random() * 5) + 6;
    };

    const getTemplate = () => {
      return `<div class="mouth ${isClosed ? "closed" : ""}">
                <div class="teeth top-teeth">${getTeeth(10)}</div>
                <div class="teeth bottom-teeth">${getTeeth(8)}</div>
              </div>`;
    };

    const startChomping = () => {
      setInterval(() => {
        // chomp();
        setIsClosed(!isClosed);
      }, 500);

      mouthRef.current.innerHTML = getTemplate();
      mouthRef.current.innerHTML = "";
      // First time

      //   change code
    };

    const inputElements = document.querySelectorAll("input.chomp");
    inputElements.forEach(makeChomper);

    // Attach event listener to the button
    const chompButton = document.getElementById("chompButton");
    chompButton.addEventListener("click", startChomping);
  }, [isClosed]);

  return (
    <div className="form" id="form">
      <h3>Feed me suggestions</h3>
      <form name="myform">
        <div className="form-group">
          <label>What do you think?</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="chomp"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>
      <button id="chompButton">Start Chomping</button>
      <div ref={mouthRef} className="mouth-wrapper"></div>
    </div>
  );
};

export default ChompForm;
