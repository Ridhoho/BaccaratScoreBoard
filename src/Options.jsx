import "./Options.css";
// TEMP FIX: Changed back to match actual filenames (capitalized)
import MenuIcon from "./assets/OptionsImages/Menu-Icon.png";
import SettingsIcon from "./assets/OptionsImages/Settings-Icon.png";
import ResetIcon from "./assets/OptionsImages/Reset-Icon.png";
import InfoIcon from "./assets/OptionsImages/Info-Icon.png";

// TODO: Add PropTypes for type checking
// Props needed: onReset, onMenu, onSettings, onInfo (all functions)
function Options() {
  // Mentor tip: prefer taking action handlers as props rather than hard-coding behavior here.
  // Example:
  // function Options({ onReset, onMenu, onSettings, onInfo }) { ... }
  //
  // This keeps the Options component "dumb" (UI-only) and makes it easy to test + reuse.
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
