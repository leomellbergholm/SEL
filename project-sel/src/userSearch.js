import React, { useState, useRef } from "react";
import Axios from "axios";
import "./App.css";
import Mastery from "./Mastery.js";
import FavoriteList from "./favoriteList";
import Profile from "./Profile.js";
import championData from "./data/champion.json";
export const apiCall = true;

export default function UserSearch() {
  const [userInfo, setUserInfo] = useState([]);
  const [masteryInfo, setMasteryInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = "RGAPI-ec130bc3-2145-4728-b528-43ff288308e8";
  const inputRef = useRef();
  const emptyArray = [];
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  let champName = "";
  let champBlurb = "";

  const apiCall = (name) => {
    setLoading(true);
    Axios.get(
      `${corsAnywhere}https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`
    )
      .then((response) => {
        if (response.status === 200) {
          const summonerId = response.data.id;
          setUserInfo([
            {
              summonerLvl: response.data.summonerLevel,
              summonerName: response.data.name,
              summonerIcon: `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/profileicon/${response.data.profileIconId}.png`,
            },
          ]);

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
      })
      .catch((error) => {
        alert(error.response.statusText);
      });
    setTimeout(() => {
      setLoading(false); // count is 0 here
    }, 2000);
  };

  console.log(masteryInfo);
  console.log(userInfo);
  return (
    <div>
      <form
        className="form-inline my-2 my-lg-0 d-block text-center"
        id="search-form"
      >
        <input
          className="form-control mr-sm-2"
          id="search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={inputRef}
        />
        <input
          type="button"
          id="search-button"
          className="btn btn-dark my-2 my-sm-0"
          value="Search"
          onClick={() => apiCall(inputRef.current.value)}
        />
      </form>
      {loading ? (
        <div className="text-center">
          <img
            style={{ height: "250px" }}
            src="https://media.giphy.com/media/Q8h6DB2gHp0r9pYeuF/giphy.gif"
            alt="Loading..."
          />
        </div>
      ) : (
        <div className="d-block">
          <div class="row">
            <FavoriteList apiCall={apiCall} item={userInfo} />
          </div>
          <div className="row justify-content-center">
              <div className ="col-10 d-flex justify-content-center">
              {userInfo.map((summoner) => (
                <Profile item={summoner} key={summoner.summonerName} />
              ))}
            
            <div>
              {masteryInfo.map((champ) => (
                <Mastery item={champ} key={champ.championId} />
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
