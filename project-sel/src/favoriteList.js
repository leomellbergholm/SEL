import React, { useRef, useState} from 'react';
import Favorite from './favorite';
import UserSearch from './userSearch';
import {apiCall} from './userSearch';

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
            name: props.item[0].summonerName,
            icon: props.item[0].summonerIcon,
            lvl: props.item[0].summonerLvl
        };

        let favoritesList = loadFavorites();
        favoritesList.push(new_favorites);

        localStorage.setItem("favorites", JSON.stringify(favoritesList));
        setFavorites(favoritesList);

        console.log(new_favorites)
        
    }
    
    console.log(favoriteList)

    function loadProfile(name){
        
        props.apiCall(name)
    }

    return(
        <div className="card m-3 p-2" style={{ width: "15rem", opacity: "80%", float: "right"}}>
            <h3>Favorites</h3>
            <button className ="btn btn-success mt-3" value="Lägg till favorit"  onClick={() => {addFavorite()}} >Add to favorites</button>
            <ul className="favorite-list" style={{padding:0}}>
                { favoriteList.map(favorite => <Favorite key={favorite.name} item={favorite} loadProfile={loadProfile}/>) }
            </ul>
        </div>
    )
}
