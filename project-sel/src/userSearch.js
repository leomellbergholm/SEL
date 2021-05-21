import React, { useState, useRef } from "react";
import Axios from "axios";
import "./App.css";
import Mastery from "./Mastery.js";
import FavoriteList from './favoriteList'
import Profile from "./Profile.js";
import championData from "./data/champion.json";
export const userInfo = true;

export default function UserSearch() {
  const [userInfo, setUserInfo] = useState([]);
  const [masteryInfo, setMasteryInfo] = useState([]);
  const apiKey = "RGAPI-e6cc0408-4897-4ce0-bb0b-494ce4568164";
  const inputRef = useRef();
  const emptyArray = [];
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  let champName = "";
  let champBlurb = "";

  const apiCall = () => {
    Axios.get(
      `${corsAnywhere}https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputRef.current.value}?api_key=${apiKey}`
    ).then((response) => {
      if (response.status === 200) {
        const summonerId = response.data.id;
        setUserInfo([
          {
            summonerLvl: response.data.summonerLevel,
            summonerName: response.data.name,
            summonerIcon: `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/profileicon/${response.data.profileIconId}.png`,
          },
        ]);
        inputRef.current.value = "";

        Axios.get(
          `${corsAnywhere}https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apiKey}`
        ).then((response) => {
          for (let x = 0; x <= 2; x++) {
            for (let i in championData.data) {
              if (championData.data[i].key == response.data[x].championId) {
                champName = championData.data[i].id;
                champBlurb = championData.data[i].blurb;
              }
            }
            emptyArray.push({
              championName: champName,
              championBlurb: champBlurb,
              championId: response.data[x].championId,
              championPoints: response.data[x].championPoints,
              championLvl: response.data[x].championLevel,
              championImg: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`,
            });
          }
          setMasteryInfo(emptyArray);
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
      <div className="float-left">
        {userInfo.map((summoner) => (
          <Profile item={summoner} key={summoner.summonerName} />
        ))}
      </div>
      <div className="float-right">
        {masteryInfo.map((champ) => (
          <Mastery item={champ} key={champ.championId} />
        ))}
      </div>
      <FavoriteList item={userInfo} />
    </div>
  );
}
