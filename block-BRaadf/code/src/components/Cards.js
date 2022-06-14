import Card from "./Card";
import { useContext } from "react";
import modeContext from "./modeContext";
function Cards({ isDarkMode }) {
  let mode = useContext(modeContext)
  return (
    <div className="cards_wrap">
      <Card  mode ={mode}/>
      <Card mode ={mode} />
      <Card mode ={mode} />
    </div>
  );
}

export default Cards;
