import "./App.css";
import CatClass from "./CatClass";
import CatFunctional from "./CatFunctional";

function App() {
  return (
    <div className="App">
      <h2>Flower Store</h2>
      <div className="w3-row">
        <div className="w3-col s6 ">
          <CatClass
            image={"cosmos.png"}
            name={"cosmos flower"}
            price={"15 SR"}
          />
        </div>
        <div className="w3-col s6 ">
          <CatFunctional
            image={"pnflower.png"}
            name={"Violet flower"}
            price={"10 SR"}
          />
        </div>
      </div>
      <div className="w3-row w3-margin-top">
        <div className="w3-col s6 ">
          <CatClass
            image={"nflower.jpg"}
            name={"Narcissus flower"}
            price={"15 SR"}
          />
        </div>
        <div className="w3-col s6 ">
          <CatFunctional
            image={"sflower.jpg"}
            name={"japanese cherryflower"}
            price={"15 SR"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
