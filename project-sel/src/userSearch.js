import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import "./App.css";

export default function UserSearch() {
  const [userInfo, setUserInfo] = useState([]);
  const [masteryInfo, setMasteryInfo] = useState([]);
  const apiKey = "RGAPI-260f5ec1-aeab-4366-b948-fb940416c649";
  const inputRef = useRef();
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  const apiCall = () => {
    Axios.get(
      `${corsAnywhere}https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputRef.current.value}?api_key=${apiKey}`
    ).then((response) => {
      if (response.status == 200) {
        const summonerId = response.data.id;
        console.log(response);
        setUserInfo([
          {
            summonerLvl: response.data.summonerLevel,
            summonerName: response.data.name,
            summonerIcon: response.data.profileIconId,
          },
        ]);
        inputRef.current.value = "";

        Axios.get(
          `${corsAnywhere}https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apiKey}`
        ).then((response) => {
          console.log(response);
          setMasteryInfo([
            {
              championId: response.data[0].championId,
              championPoints: response.data[0].championPoints,
              championLvl: response.data[0].championLevel,
            },
          ]);
        });
      }
    });
  };
  console.log(masteryInfo);
  console.log(userInfo);
  return (
    <div>
      <form
        className="form-inline my-2 my-lg-0 d-block text-center"
        id="search-bar"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={inputRef}
        />
        <input
          type="button"
          className="btn btn-outline-success my-2 my-sm-0"
          value="Search"
          onClick={apiCall}
        />
      </form>
    </div>
  );
}
