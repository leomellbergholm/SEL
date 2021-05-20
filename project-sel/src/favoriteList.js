import React, {useState} from 'react';
import Favorite from './favorite'
import {userInfo, masteryInfo} from "./userSearch";

export default function FavoriteList() {

    //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.summonerName
    const [favorites, setFavorite] = useState([]);

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

    function addFavorite(event){

        setFavorite([...favorites, {
            name: userInfo.summonerName,
            icon: userInfo.summonerIcon,
            level: userInfo.summonerLvl
        }]);

        saveFavorites(favorites)
    }
    
    return(
        <div>
            <h3>Favorites</h3>
            <ul className="favorite-list">
                { favorites.map(favorite => <Favorite key={favorite.name} item={favorite}/>) }
            </ul>
        </div>
    )

}