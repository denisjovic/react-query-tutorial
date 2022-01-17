import "./App.css";
import Characters from "./components/characters/Characters.component";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty</h1>
        <Characters />
      </div>
    </div>
  );
}

export default App;
