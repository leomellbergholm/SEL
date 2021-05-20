import React from 'react'

export default function Favorite(props){
    
    return(
        <div>
            <li className="favorite-list-item">
                {props.item.name}
                {props.item.icon}
                {props.item.level}
            </li>
        </div>
    )
}
