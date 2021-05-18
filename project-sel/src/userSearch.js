// HÄR SKRIVS ALLT :))))))))))))))))
import React, { useState, useRef } from "react";
import "./App.css";

export default function UserSearch() {
    const [userResult, userInfo ] = useState([]);

    const inputRef = useRef();

    


return (
<div>
    <form class="form-inline my-2 my-lg-0 d-block text-center" id="search-bar">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={inputRef}></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
);
}