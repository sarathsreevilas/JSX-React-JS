import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Vincent"
  const message = () => "Good Morning...";


  return (
    <div className="App">
      <h1 className="heading">Hello World</h1>
      <h1>My name is {name}</h1>
      <h2>{message()}</h2>
    </div>
  );
}

export default App;