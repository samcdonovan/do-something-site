import React from 'react';
import './styles/App.css';
import { getWeather } from './utils/weather';
import WeatherInfo from './components/WeatherInfo';
import Button from './components/Button';

function App() {
  const [weather, setWeather] = React.useState({
    status: 0,
    temp: Infinity,
    description: "Something went wrong with the weather API!",
    wind: Infinity,
    icon: "broken.png"
  });

  const [results, setResults] = React.useState();

  React.useEffect(() => {
    getWeather(setWeather);
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <WeatherInfo data={weather} />

        <Button text="Search" callback={setResults} />
      </header>
    </div>
  );
}

export default App;
