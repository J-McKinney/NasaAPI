import NASA from "./Components/Index";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nasa API Picture Of The Day</p>
        <NASA />
      </header>
    </div>
  );
}

export default App;
