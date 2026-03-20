import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        Coded by{" "}
        <a
          className="footer-link"
          href="https://github.com/Pezza242"
          target="_blank"
          rel="noreferrer"
        >
          Peri Williams-Yearwood
        </a>
        ,{" "}
        <a
          className="footer-link"
          href="https://github.com/Pezza242/my-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>
        , and{" "}
        <a
          className="footer-link"
          href="https://pezza242-dictionary-project.netlify.app/?"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
