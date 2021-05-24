import React, { useState} from 'react';
import Favorite from './favorite'
import {userInfo} from "./userSearch";

export default function FavoriteList(props) {

    //userinfo.summonername -> LocalStorage -> länkar -> apicall för profil -> userinfo.summonerName
    const [favorites, setFavorites] = useState([]);
    const favoriteList = loadFavorites();

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
            name: props.item.summonerName,
            icon: props.item.summonerIcon,
            lvl: props.item.summonerLvl
        };

        let favoritesList = loadFavorites();
        favoritesList.push(new_favorites);

        localStorage.setItem("favorites", JSON.stringify(favoritesList));
        setFavorites(favoritesList);
        
    }

    console.log(favoriteList)

    return(
        <div className="card m-3 p-2" style={{ width: "15rem", opacity: "80%", float: "right"}}>
            <h3>Favorites</h3>
            <button className ="btn btn-success mt-3" value="Lägg till favorit"  onClick={() => {addFavorite()}} >Add to favorites</button>
            <ul className="favorite-list" style={{padding:0}}>
                { favoriteList.map(favorite => <Favorite key={favorite.name} item={favorite}/>) }
            </ul>
        </div>
    )
}
