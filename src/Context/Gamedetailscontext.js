import { createContext } from "react";
import axios from "axios";

export let gamedetailscontext = createContext();

export function Gamedetailsprovider(props) {
  let gamedata;
  const headers = {
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

   async  function getgamedetails(id) {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      headers
    );
     gamedata = data
}
    
    return (
      <>
        <gamedetailscontext.Provider value={{ getgamedetails, gamedata }}>
          {props.children}
        </gamedetailscontext.Provider>
      </>
    );
}