import React from 'react'

export default function Favorite(props){
    
    return(
        <div>
            <li className="favorite-list-item">
                {props.item.name}
                <img
                    src={props.item.icon}
                    className="card-img-top"
                    alt="Summoner Icon"
                    style={{ width: "200px", borderRadius: "50%" }}
                />
                {props.item.lvl}
            </li>
        </div>
    )
}
