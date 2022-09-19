import { useState } from "react";
import { Players } from "../share/ListOfPlayer";
import PlayersPresentation from "./PlayersPresentation";
import FilmsPresentation from "./FilmsPresentation";
import { Films } from "../share/ListOfFilms";

function Main() {
  const [player, setPlayer] = useState(Players);
  const [film, setFilm] = useState(Films);
  return (
//   <PlayersPresentation players={player} />
  <FilmsPresentation films={Films}/>
  )
}

export default Main;
