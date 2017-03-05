import React, {Component} from 'react';
//import DateSelector from (./date_selector);
import CrimeSelector from './crime_selector';
//import CitySelector from (./city_selector);

import {SingleDatePicker} from 'react-dates';


class CrimeDisplayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      startDateFocus: null,
      endDateFocus: null,
      crimeSelections: ["robo", "violacion", "violencia", "drogas", "prostitucion"],
      selectedCrimes: [],
      city: null
    }

    // bind this to selectors
    this.handleCrimeSelection = this.handleCrimeSelection.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onEndDateFocusChange = this.onEndDateFocusChange.bind(this);
    this.onStartDateFocusChange = this.onStartDateFocusChange.bind(this);
  }
  onStartDateChange(newStartDate){
    this.setState({ startDate: newStartDate }, () => console.log("start date is: " + this.state.startDate));
  }
  onEndDateChange(newEndDate){
    this.setState({ endDate: newEndDate }, () => console.log("end date is: " + this.state.endDate));
  }

  onStartDateFocusChange(focusedF){
    this.setState({ startDateFocus: focused },() => console.log("start date focus change is: " + this.state.onEndDateFocusChange));
  }

  onEndDateFocusChange(focusedI){
    this.setState({ endDateFocus: focused });
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
        <h2 className="panelTitle">Filtros</h2>
        <CrimeSelector
					title={'Qué tipo de crímenes quieres ver en el mapa?'}
					setName={'crimes'}
					type={'checkbox'}
					controlFunc={this.handleCrimeSelection}
					options={this.state.crimeSelections}
					selectedOptions={this.state.selectedCrimes} />

        Rango de fechas

        <SingleDatePicker
          id="startDate-input"
          date={this.state.startDate}
          focused={this.state.startDateFocus}
          onDateChange={this.onStartDateChange}
          onFocusChange={({ focused }) => { this.setState({ startDateFocus: focused }); }}
        />

        Ubicación, haz click en el mapa donde sucedió el crimen

        <SingleDatePicker
          id="endDate-input"
          date={this.state.endDate}
          focused={this.state.endDateFocus}
          onDateChange={this.onEndDateChange}
          onFocusChange={({ focused }) => { this.setState({ endDateFocus: focused }); }}
        />



      </div>
    );
  }
}

export default CrimeDisplayer;
