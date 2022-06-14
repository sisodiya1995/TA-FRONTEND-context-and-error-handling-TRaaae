import React from "react";
//import { useContext } from "react";
import modeContext from "./modeContext";
class Banner extends React.Component {
    static contextType = modeContext;

  render() {
   
    return (
      
      <div
        className={this.context.mode
            
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    )
  }
}

export default Banner;
