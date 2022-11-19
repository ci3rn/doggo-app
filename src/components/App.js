import '../App.css';
import { connect } from "react-redux";
import DoggoList from './DoggoList';
import logo from '../doggo_logo.png'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <DoggoList />
    </div>
  );
}

const ConnectedApp = connect()(App);

export default ConnectedApp;
