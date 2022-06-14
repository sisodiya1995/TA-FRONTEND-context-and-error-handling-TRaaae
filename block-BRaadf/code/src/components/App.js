import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import modeContext from "./modeContext";
class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <modeContext.Provider value ={{mode :isDarkMode ,changeMode : this.changeMode}}>
        <Header  />
        <Main/>
        <SwitchButton  />
        </modeContext.Provider>
        
      </div>
    );
  }
}

export default App;
