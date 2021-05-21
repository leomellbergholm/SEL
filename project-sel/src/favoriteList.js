import React, {useEffect, useState} from 'react';
import Favorite from './favorite'
import {userInfo} from "./userSearch";

export default function FavoriteList(props) {

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
            name: props.item[0].summonerName,
            icon: props.item[0].summonerIcon,
            lvl: props.item[0].summonerLvl
        }]);

        const favoritesList = loadFavorites();
        favoritesList.push(favorites);
    
        saveFavorites(favoritesList);

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
