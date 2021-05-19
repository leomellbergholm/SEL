import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import "./App.css";

export default function UserSearch() {
  const [userInfo, setUserInfo] = useState([]);
  const apiKey = "RGAPI-184476c9-694b-47a1-bcfe-7428ad9ad198";
  const inputRef = useRef();

  const apiCall = () => {
    Axios.get(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputRef.current.value}?api_key=${apiKey}`
    ).then((response) => {
      console.log(response);
    });
  };

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
