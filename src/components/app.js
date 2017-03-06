import React, {Component} from 'react';
import CrimeMap from './crime_map';
import CrimeDisplayer from './crime_displayer';
import CrimeAdder from './crime_adder';
const API_KEY = 'hey! missing GOOGLEMAPS KEY';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimes: [],
      curentCrime: null
    }
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
                      <div id="map"></div>
                    </div>
                  </div>

                  <div id="panelFiltros" className="col-md-4 mapPanel">
                    <CrimeDisplayer/>

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
