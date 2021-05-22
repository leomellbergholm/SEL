import React from "react";

export default function Mastery(props) {
  return (
    <div className="card m-3 p-2" style={{ width: "30rem", opacity: "80%" }}>
      <img
        src={props.item.championImg}
        className="card-img-top"
        alt="Champion splashart"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.championName}</h5>
        <h6>{props.item.championLvl}</h6>
        <h6>{props.item.championPoints}</h6>
        <p className="card-text">{props.item.championBlurb}</p>
      </div>
    </div>
  );
}
