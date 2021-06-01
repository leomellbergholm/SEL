import React from "react";

export default function Favorite(props) {
  return (
    <li
      className="favorite-list-item col-lg-2 m-3"
      style={{ listStyle: "none" }}
    >
      <img
        onClick={() => {
          props.loadProfile(props.item.name);
        }}
        src={props.item.icon}
        className="card-img-top mt-2"
        alt="Summoner Icon"
        style={{ width: "100px", borderRadius: "50%", cursor: "pointer" }}
      />
      <h5
        onClick={() => {
          props.loadProfile(props.item.name);
        }}
        style={{ cursor: "pointer" }}
      >
        {props.item.name}
      </h5>
      <p>lvl: {props.item.lvl}</p>
      <button
        className="btn btn-sm btn-danger float-end mb-2"
        onClick={() => {
          props.deleteItem(props.item.name);
        }}
      >
        X
      </button>
    </li>
  );
}
