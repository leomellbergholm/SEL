import React, { useRef, useState } from "react";
import Favorite from "./favorite";
import UserSearch from "./userSearch"

export default function FavoriteList(props) {
  //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.summonerName
  const [favorites, setFavorites] = useState([]);
  const favoriteList = loadFavorites();

  function loadFavorites() {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  }

  function addFavorite() {

    let new_favorites = {
      name: props.item[0].summonerName,
      icon: props.item[0].summonerIcon,
      lvl: props.item[0].summonerLvl,
    };

    let favoritesList = loadFavorites();

    favoritesList.push(new_favorites);

    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    setFavorites(favoritesList);

    console.log(new_favorites);
  }

function deleteItem(name){
    setFavorites(favoriteList.filter((item)=> item.name !== name ));
    var items = JSON.parse(localStorage.getItem("favorites"));

    for (var i =0; i< items.length; i++) {
        var item = items[i];
        if (item.name == name) {
            items.splice(i, 1);
        }
    }
    items = JSON.stringify(items);

    localStorage.setItem("favorites", items);
}


function loadProfile(name) {
    props.apiCall(name);  
}

  return (
    <div
      className="col card m-3 p-2"
      style={{ width: "15rem", opacity: "80%", float: "right"}}
      id="favourites-card"
    >
      <h3>Favorites</h3>
      <button
        className="btn btn-success mt-3"
        value="Lägg till favorit"
        onClick={() => {
          addFavorite();
        }}
      >
        Add to favorites
      </button>
      <ul
        className="favorite-list d-flex flex-wrap justify-content-center"
        style={{ padding: 0 }}
      >
        {favoriteList.map((favorite) => (
          <Favorite
            key={favorite.name}
            item={favorite}
            loadProfile={loadProfile}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
