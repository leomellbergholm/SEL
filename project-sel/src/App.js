import "./App.css";
import UserSearch from "./userSearch";
import FavoriteList from "./favoriteList";

function App() {
  return (
    <div className="App">
      <div className="text-white">
        <h1>Project SEL - A League of Legend search</h1>
        <h3>Search for a User</h3>
        <hr></hr>
      </div>
      <UserSearch />
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
