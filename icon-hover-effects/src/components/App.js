import "../scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGlobe,
  faGlassMartini,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <ul>
      {[faHeart, faGlassMartini, faGlobe, faGift].map((icon, i) => {
        return (
          <li key={i}>
            <FontAwesomeIcon icon={icon} className="icon" />
          </li>
        );
      })}
    </ul>
  );
}

export default App;
