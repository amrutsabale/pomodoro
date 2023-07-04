import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";
import Customizer from "./Customizer.js";
function App() {
  return (
    <div className="App">
      <Customizer>
        <Timer />
      </Customizer>
    </div>
  );
}

export default App;
