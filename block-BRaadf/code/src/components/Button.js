import React from "react";
import { useContext } from "react";
import modeContext from "./modeContext";
export default function SwitchButton() {
  let mode = useContext(modeContext)
  //console.log(mode)
  return (
    
    <button
      className={`btn ${mode.mode ? "btn-dark" : "btn-light"}`}
      onClick={mode.changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
