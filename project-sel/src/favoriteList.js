import React, {useEffect, useState} from 'react';
import Favorite from './favorite'
import {userInfo} from "./userSearch";

export default function FavoriteList(props) {

    //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.summonerName
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        
        const favorites = localStorage.getItem("favorites");

        if(favorites) {
            return JSON.parse(favorites);
        }
        else {
            return [];
        }
        
    }

    function addFavorite(){
        let new_favorites = {
            name: props.item[0].summonerName,
            icon: props.item[0].summonerIcon,
            lvl: props.item[0].summonerLvl
        };

        let favoritesList = loadFavorites();
        favoritesList.push(new_favorites);

        localStorage.setItem("favorites", JSON.stringify(favoritesList));
        setFavorites(favoritesList);
        
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
