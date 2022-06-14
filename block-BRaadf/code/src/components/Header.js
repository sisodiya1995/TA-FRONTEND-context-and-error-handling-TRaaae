import { useContext } from "react";
import modeContext from "./modeContext";
function Header({ isDarkMode }) {
  let mode = useContext(modeContext)
  console.log(mode)
  return (
    <h1 className={`heading ${mode.mode ? "heading-dark" : "heading-light"}`}>
      {mode.mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
