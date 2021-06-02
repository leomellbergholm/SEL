import React from "react";

export default function Mastery(props) {
  return (
    <div className="card col-md m-2" style={{ opacity: "80%" }}>
      <img
        src={props.item.championImg}
        className="card-img-top p-2"
        alt="Champion splashart"
        style={{ borderRadius: "20px" }}
      />
      <div className="card-body">
        <h3 className="card-title">{props.item.championName}</h3>
        <img
          src={`https://www.masterypoints.com/assets/img/lol/mastery_icons/master${props.item.championLvl}.png`}
        />

        <h6>{props.item.championPoints} points</h6>
        <p className="card-text">{props.item.championBlurb}</p>
      </div>
    </div>
  );
}
