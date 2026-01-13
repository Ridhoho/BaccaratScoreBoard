import "./Options.css";
import MenuIcon from "./assets/OptionsImages/menu-icon.png";
import SettingsIcon from "./assets/OptionsImages/settings-icon.png";
import ResetIcon from "./assets/OptionsImages/reset-icon.png";
import InfoIcon from "./assets/OptionsImages/info-icon.png";

function Options() {
  return (
    <navbar className="OptionsGroup">
        <button className="Menu">
          <img src={MenuIcon} alt="Menu Icon" />
        </button>
        <button className="Settings">
          <img src={SettingsIcon} alt="Settings Icon" />
        </button>
        <button className="Reset">
          <img src={ResetIcon} alt="Reset Icon" />
        </button>
        <button className="Info">
          <img src={InfoIcon} alt="Info Icon" />
        </button>
    </navbar>
  );
}

export default Options;
