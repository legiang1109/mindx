
import './App.css';
import List from './assets/list.jsx';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" name="tasks" value="" placeholder='Enter your tasks here...'></input>
      </form>

      <ul>
        <List task="Clean up bedroom"/>
        <List task="Buy some milk"/>
        <List task="Jogging"/>
        <List task="Learn React"/>
        <List task="Doing Exercises"/>
      </ul>
    </div>
  );
}

export default App;
