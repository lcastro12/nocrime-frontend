import React, {Component} from 'react';
//import DateSelector from (./date_selector);
import CrimeSelector from './crime_selector';
//import CitySelector from (./city_selector);

class CrimeDisplayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      crimeSelections: ["robo", "violación", "violencia", "drogas", "prostitución"],
      selectedCrimes: [],
      city: null
    }

    // bind this to selectors
    this.handleCrimeSelection = this.handleCrimeSelection.bind(this);
  }
  handleCrimeSelection(e){
    const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.selectedCrimes.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedCrimes.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.selectedCrimes, newSelection];
		}
		this.setState({ selectedCrimes: newSelectionArray }, () => console.log('crime selection', this.state.selectedCrimes));
  }

  render(){
    return(
      <div>
        Testing Crime Displayer
        <CrimeSelector
					title={'Qué tipo de crímenes quieres ver en el mapa?'}
					setName={'crimes'}
					type={'checkbox'}
					controlFunc={this.handleCrimeSelection}
					options={this.state.crimeSelections}
					selectedOptions={this.state.selectedCrimes} />
      </div>
    );
  }
}

export default CrimeDisplayer;
