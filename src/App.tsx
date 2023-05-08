import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div>
      <h1>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <span>A React 18 & React Router 6.4 Disco Inferno</span>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </h1>
      <div className="home-page"></div>
      <div className="disco-inferno-page">Disco Inferno</div>
      <div className="boogie-wonderland-page">Boogie Wonderland</div>
    </div>
  );
}

export default App;
