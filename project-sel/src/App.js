import "./App.css";
import UserSearch from "./userSearch";
import FavoriteList from "./favoriteList";


function App() {
  return (
    <div className="App">
      <h1>Project SEL - A League of Legend search</h1>
      <h3>Search for a User</h3>
      <hr></hr>
      <UserSearch />
      {/* <UserProfile /> */}
      <FavoriteList />
    </div>
  );
}

export default App;
