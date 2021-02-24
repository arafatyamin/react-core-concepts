import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <p>start </p>
        <person></person>
      </header>
    </div>
  );
};
function person() {
  return <h2>Name: Yamin Arafat</h2>
}

export default App;
