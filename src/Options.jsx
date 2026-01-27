import "./Options.css";
import MenuIcon from "./assets/OptionsImages/menu-icon.png";
import SettingsIcon from "./assets/OptionsImages/settings-icon.png";
import ResetIcon from "./assets/OptionsImages/reset-icon.png";
import InfoIcon from "./assets/OptionsImages/info-icon.png";

// TODO: Add PropTypes for type checking
// Props needed: onReset, onMenu, onSettings, onInfo (all functions)
function Options() {
  return (
    <nav className="OptionsGroup">
        {/* TODO: Add onClick handlers - these buttons currently do nothing */}
        {/* TODO: Add aria-label for screen readers since buttons only contain images */}
        <button className="Menu">
          {/* NOTE: Alt text should be empty ("") with role="presentation" for decorative images */}
          {/* The button itself should have aria-label="Open menu" */}
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
    </nav>
  );
}

export default Options;
