import React from 'react';
import './styles/App.css';
import { getWeather } from './utils/weather';
import WeatherInfo from './components/WeatherInfo';
import Button from './components/Button';
import Place from './components/Place';

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
              <Place
                key={index}
                locationData={location}
              />
            )
          }) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
