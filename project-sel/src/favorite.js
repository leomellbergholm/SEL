import React from 'react'

export default function Favorite(props){
    
    return(
        <div className="card-body">
            <li className="favorite-list-item" style={{listStyle : "none"}}>
                <img
                    src={props.item.icon}
                    className="card-img-top"
                    alt="Summoner Icon"
                    style={{ width: "75px", borderRadius: "50%" }}
                />
                <h5>{props.item.name}</h5>
                <p>lvl: {props.item.lvl}</p>
            </li>
        </div>
    )
}
