import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>What's the weather like in... </h1>
            <form>
              <input type="search" />
              <button class="button-form" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="col-6">
            <Weather />
          </div>
        </div>
      </div>
      <div>
        Open-sourced on{" "}
        <a
          href="https://github.com/hscott13/react-weather-app-v2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , coded by{" "}
        <a
          href="https://celebrated-arithmetic-8e4959.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Heather Scott
        </a>
      </div>
    </div>
  );
}

export default App;
