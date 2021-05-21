import React, {useState} from 'react';
import Favorite from './favorite'
import {userInfo} from "./userSearch";

export default function FavoriteList() {

    //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.summonerName
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        const favorites = localStorage.favorites;
        if (favorites === undefined) {
            return [];
        }
        return JSON.parse(favorites);
    }

    function saveFavorites(favorites) {
        let jsonFavorites = JSON.stringify(favorites);
        localStorage.setItem("favorites", jsonFavorites);
    }


    function addFavorite(){
        setFavorites([...favorites, {
            name: userInfo.summonerName,
            icon: userInfo.summonerIcon,
            lvl: userInfo.summonerLvl
        }]);
        console.log(userInfo);
        console.log(favorites);
    }
    return(
        <div>
            <h3>Favorites</h3>
            <button className ="btn btn-success mt-3" value="Lägg till favorit"  onClick={() => {addFavorite()}} >Add to favorites</button>
            <ul className="favorite-list">
                { favorites.map(favorite => <Favorite key={favorite.name} item={favorite}/>) }
            </ul>
        </div>
    )
}