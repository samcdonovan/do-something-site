import React from 'react';
import './styles/App.css';
import { getWeather } from './utils/weather';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weather, setWeather] = React.useState({
    status: 0,
    temp: Infinity,
    description: "Something went wrong with the weather API!",
    wind: Infinity,
    icon: "broken.png"
  });

  React.useEffect(() => {
    getWeather(setWeather);
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <WeatherInfo data={weather} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
