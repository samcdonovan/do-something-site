
interface Props {
    text: string,
    callback: Function
}

function Button(props: Props): JSX.Element {

    function search() {
        let latitude: number = 0;
        let longitude: number = 0;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                let radius: number = 1500;
                let type: string = "restaurant";

                /* retrieve transaction feed from proxy server */
                fetch("http://localhost:3124/nearby_places?latitude=" + latitude + "&longitude="
                    + longitude + "&radius=" + radius + "&type=" + type)
                    .then((res) => res.json())
                    .then((data) => {
                        props.callback(data.data);
                    })
            },
            (error) => {
                console.log("Location permission denied");
            }
        );
    }


    return (
        <button
            className=""
            onClick={search}>
            {props.text}
        </button>
    )
}

export default Button;