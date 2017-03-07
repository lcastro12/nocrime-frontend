import React, {Component} from 'react';

import {
withGoogleMap,
GoogleMap,
Marker,
InfoWindow,
} from "react-google-maps";

import fancyMapStyles from "../../public/style/fancyMapStyles.json";

const ClosureListenersExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultOptions={{ styles: fancyMapStyles }}
        defaultCenter={new google.maps.LatLng(4.60, -74.06)}
    >

      {props.markers.map((marker, index) =>
      {
        const onClick = () => props.onMarkerClick(marker);
        const onCloseClick = () => props.onCloseClick(marker);

        return (
            <Marker
                key={index}
                position={marker.position}
                title={(index + 1).toString()}
                onClick={onClick}
            >
              {marker.showInfo && (
                  <InfoWindow onCloseClick={onCloseClick}>
                    <div>
                      <strong>{marker.content}</strong>
                      <br />
                      <em>The contents of this InfoWindow are actually ReactElements.</em>
                    </div>
                  </InfoWindow>
              )}
            </Marker>
        );
      })}
    </GoogleMap>
));

class CrimeMap extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      markers: []
    }
  }

  componentDidMount()
  {
    const nMarkers = [];

    for (let i = 0; i < this.props.crimes.length; i++)
    {
      const position = new google.maps.LatLng(
          this.props.crimes[i].latitude,
          this.props.crimes[i].longitude
      );

      nMarkers.push({
        position,
        content: `This is the secret message`.split(` `)[i],
        showInfo: false,
      });
    }
    console.log(nMarkers.length);
    this.setState({markers: nMarkers});
  }


  render()
  {

    return (

        <ClosureListenersExampleGoogleMap
            containerElement={
              <div style={{ height: `500px` }} />
            }
            mapElement={
              <div style={{ height: `100%` }} />
            }

            markers={this.props.markers}

        />
    );
  }
}

export default CrimeMap;
