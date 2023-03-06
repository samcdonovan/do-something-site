import '../styles/WeatherInfo.module.css';

/* Interface for Weather props */
export interface Props {
    data: Weather
}

/**
 * 
 */
function WeatherInfo(props: Props): JSX.Element {

    return (
        <div>
            {props.data.status === 200 ?
                <div>
                    <p>{props.data.temp}</p>
                    <p>{props.data.wind}</p>
                    <p>{props.data.description}</p>
                    <img src={props.data.icon} />
                </div> : <div>
                    <p>Something went wrong with the weather API!</p>
                    <p>Sorry about that!</p>
                </div>
            }
        </div>

    )
}

export default WeatherInfo;