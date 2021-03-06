import React from "react";

export default function Profile(props) {
  return (
    <div className="card col-sm-7 m-2" id="profile" style={{ opacity: "80%" }}>
      <img
        src={props.item.summonerIcon}
        className="card-img-top d-block m-auto"
        alt="Champion splashart"
        style={{ width: "200px", borderRadius: "50%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.summonerName}</h5>
        <h6>Lvl: {props.item.summonerLvl}</h6>
      </div>
    </div>
  );
}
