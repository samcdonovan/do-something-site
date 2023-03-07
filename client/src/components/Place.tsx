interface Props {
    locationData: Location
}

function Place(props: Props): JSX.Element {

    return (
        <div>
            <p>{props.locationData.name}</p>
            <p>{props.locationData.vicinity}</p>
            <p>{props.locationData.rating}</p>
            <p>{props.locationData.price_level}</p>
            <img src={props.locationData.icon}></img>
            <p>{props.locationData.website}</p>
        </div>
    )
}

export default Place;