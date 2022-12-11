import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg = "https://user-images.githubusercontent.com/85655579/206908456-0cb1630b-084f-4f24-98f8-83888f52db4e.png";

  return (
    <nav>
      <div>
        <p> 
          <br></br>
           <div align="rigth" id="nomeGP">Feito por: Bruno William, Dandara Oliveira, Luiz Henrique, Marlon Augusto e Lara Belo</div> 
           <br></br>
        </p>
      </div>
      <div>
        <br></br><br></br>
        <a href="./Pokedex.js">
        <img align="center" alt="pokeapi-logo" src={logoImg} className="navbar-img"/>
        </a>
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
