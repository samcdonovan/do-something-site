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

  const [results, setResults] = React.useState(Array<Location>);
  const [dataRetrieved, setDataRetrieved] = React.useState(false);

  React.useEffect(() => {
    getWeather(setWeather);
  }, [])

  React.useEffect(() => {
    setDataRetrieved(true);
  }, [results])

  return (
    <div className="app">
      <header>

        <WeatherInfo data={weather} />

        <Button text="Search" callback={setResults} />

        <div>
          {dataRetrieved ? results.map((location: Location, index: number) => {
            console.log(location);
            return (
              <div key={index}>
                <p>{location.name}</p>
                <p>{location.vicinity}</p>
                <p>{location.rating}</p>
                <p>{location.price_level}</p>
                <img src={location.icon}></img>
                <p>{location.website}</p>
              </div>
            )
          }) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
