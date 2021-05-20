import React, {useState} from 'react';
import Favorite from './favorite'

export default function FavoriteList() {

    //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.name
    
    function loadFavorites() {
        const favorites = localStorage.favorites;
        if (favorites == undefined) {
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
            name: userinfo.summonername,
            icon: userinfo.icon,
            level: userinfo.level,
        }]);
    }

    return(
        <div>
            <h3>Favorites</h3>
            <ul className="favorite-list">
                { favorites.map(favorite => <Favorite key={favorite.profileName} item={favorite}/>) }
            </ul>
        </div>
    )

}