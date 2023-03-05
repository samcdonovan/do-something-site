/**
 * Retrieves savings goal data from the localhost endpoint
 * 
 * @param setWeather Function to set the 'weatber' React state
 */
export function getWeather(setWeather: Function) {

    /* retrieve transaction feed from proxy server */
    fetch("http://localhost:3124/weather")
        .then((res) => res.json())
        .then((data) => {
            setWeather(data);
        })
}