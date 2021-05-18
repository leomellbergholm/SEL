import logo from "./logo.svg";
import "./App.css";
import userSearch from "./userSearch";

function App() {
  return (
    <div className="App">
      <h1>Project SEL - A League of Legend search</h1>
      <h3>Search for a User</h3>
      <hr></hr>
      <userSearch />
      <searchResultsUser />
      <searchResultsInfo />
    </div>
  );
}

export default App;
