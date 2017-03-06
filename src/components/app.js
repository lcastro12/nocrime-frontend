import React, {Component} from 'react';
import axios from 'axios';
import CrimeMap from './crime_map';
import CrimeDisplayer from './crime_displayer';
import CrimeAdder from './crime_adder';
const API_KEY = 'hey! missing GOOGLEMAPS KEY';
const ROOT_URL = "http://localhost:1337/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimes: [],
      markers:[],
      curentCrime: null
    }
  }
  componentDidMount()
  {
    axios.get(ROOT_URL+ "/crimes")
    .then(response => {
      this.setState({
        crimes: response.data
      });
      const nMarkers = [];

      for (let i = 0; i < this.state.crimes.length; i++)
      {
        const position = new google.maps.LatLng(
            this.state.crimes[i].latitude,
            this.state.crimes[i].longitude
        );

        nMarkers.push({
          position,
          content: `This is the secret message`.split(` `)[i],
          showInfo: false,
        });
      }
      console.log(nMarkers.length);
      this.setState({markers: nMarkers});
    })
  }

  updateMapWithFilters(startDate, endDate, selectedCrimes){
    console.log("app.js calling update map with filter in app.js");
    console.log("app.js start date is " + startDate);
    console.log("app.js end date is " + endDate);
    console.log("app.js selectedCrimes is: " + selectedCrimes);

    // update crimes with a axios call to the API. API IS DONE, only thing left is to call it. 



  }

  render(){
    return(
        <div className="mapSection" id="mapSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1">
              </div>

              <div className="col-md-10 principal">
                <div className="row mapContainer">
                  <div className="col-md-8 map">
                    <div className="map-area">
                      <CrimeMap crimes={this.state.crimes} markers={this.state.markers}/>
                    </div>
                  </div>

                  <div id="panelFiltros" className="col-md-4 mapPanel">
                    <CrimeDisplayer updateMapWithFilters={this.updateMapWithFilters.bind(this)}/>
                  </div>
                  <div id="panelCrear" className="col-md-4 mapPanel">
                    <CrimeAdder />
                  </div>
                </div>
              </div>

              <div className="col-md-1">
              </div>
            </div>
          </div>

        </div>


  );
  }
}

export default App;
