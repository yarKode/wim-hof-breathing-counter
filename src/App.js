import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div class="assistant">
      <div class="container assistant-row">
        <div class="square assistant-el">
          <p>01</p>
        </div>
        <div class="square assistant-el assistant-btn">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div class="square assistant-el assistant-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div class="container assistant-row">
        <div class="double-square assistant-el">
          <p>01:04</p>
        </div>
        <div class="square assistant-el assistant-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div class="container assistant-row">
        <div class="double-square assistant-el">
          <p>00:12</p>
        </div>
        <div class="square assistant-el assistant-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}

export default App;
