import React from 'react'

export default function Favorite(props){

    return(
        <div>
            <li className="favorite-list-item">
                {props.summoner.name}
                {props.summoner.image}
                {props.summoner.level}
            </li>
        </div>
    )
}
