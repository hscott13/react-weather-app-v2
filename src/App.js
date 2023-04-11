import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 px-5 d-flex flex-column align-items-center justify-content-center">
            <h1>What's the weather like in... </h1>
            <form>
              <input
                type="search"
                className="border border-0 fs-5"
                placeholder="Enter a city"
              />
              <button
                className="button-form border border-0 bg-transparent"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass fs-5"></i>
              </button>
            </form>
          </div>
          <div className="col-6 d-flex flex-column align-items-center">
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
