import React from 'react'

export default function Favorite(props){

    return(
        <div>
            <li className="favorite-list-item">
                {props.item.profileName}
                {props.item.profileImage}
                {props.item.profileLevel}
            </li>
        </div>
    )
}
