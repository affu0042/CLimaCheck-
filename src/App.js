import './App.css';
import Tempapp from './components/Tempapp';
import { WeatherApp } from './components/weatherapp/WeatherApp';

function App() {
  return (
    <div className="App">
        {/* <Tempapp/> */}
        <WeatherApp/>
    </div>
  );
}

export default App;
