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
      <div>
        <div className="row">
          <CrimeMap />
          <CrimeDisplayer />
          <CrimeAdder />

        </div>
      </div>

    );
  }
}

export default App;
