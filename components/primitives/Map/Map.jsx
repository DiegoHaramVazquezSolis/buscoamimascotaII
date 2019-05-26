import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import Pin from './Pin';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGh2cyIsImEiOiJjanc1YzE1dHAweGVjNDRzMGdqcjRndmp4In0.0ZtFIsHUnZmBwqOgFlidiQ';

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
};

class Map extends React.Component {
    state = {
        viewport: {
            width: '100%',
            height: '50vh',
            latitude: 20.6870673,
            longitude: -103.3526815,
            zoom: 13,
            bearing: 0,
            pitch: 0
        },
        marker: {
            latitude: 20.6870673,
            longitude: -103.3526815,
        },
    };

    logDragEvent(name, event) {
        this.setState({
            events: {
                ...this.state.events,
                [name]: event.lngLat,
            }
        });
    }
    
    onMarkerDragStart = (event) => {
        this.logDragEvent('onDragStart', event);
    }
    
    onMarkerDrag = (event) => {
        this.logDragEvent('onDrag', event);
    }
    
    onMarkerDragEnd = (event) => {
        this.logDragEvent('onDragEnd', event);
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1],
            }
        });
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${event.lngLat[0]}%2C%20${event.lngLat[1]}.json?access_token=${MAPBOX_TOKEN}`)
        .then((response) => {
            console.log(response);
        })
    };

    onViewportChange = (viewport) => {
        this.setState({viewport, marker: {latitude: viewport.latitude, longitude: viewport.longitude}});
    };

    render() {
        return (
            <>
                <ReactMapGL
                    width='100%'
                    height='100%'
                    mapStyle='mapbox://styles/mapbox/light-v9'
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onViewportChange={(viewport) => this.setState({viewport})}
                    {...this.state.viewport}>
                        <GeolocateControl
                        style={geolocateStyle}
                        onViewportChange={this.onViewportChange}
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={false} />
                        <Marker 
                            longitude={this.state.marker.longitude}
                            latitude={this.state.marker.latitude}
                            offsetTop={-20}
                            offsetLeft={-10}
                            draggable
                            onDragStart={this.onMarkerDragStart}
                            onDrag={this.onMarkerDrag}
                            onDragEnd={this.onMarkerDragEnd} >
                            <Pin size={20} />
                        </Marker>
                </ReactMapGL>
            </>
        );
    }
}

export default Map;