import "./App.css";
import Box from "./Components/Box";
import Card from "./Components/Card";
import Shape from "./Components/Shape";

function App() {
  return (
    <div className="App">
      {/* <div className="CardMain">
        <Card />
      </div> */}
      {/* <Shape /> */}
      <div
        style={{
          position: "relative",
          background: "#F3AC3C",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box />
      </div>
    </div>
  );
}

export default App;
