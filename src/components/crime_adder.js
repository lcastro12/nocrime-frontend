import React, {Component} from 'react';
import ReportedSelector from './reported_selector';
import CrimeTypeSelector from './crime_type_selector';
import Description from  './description';
import {SingleDatePicker} from 'react-dates';

class CrimeAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimeToAdd: null,
      reportedSelections: ['si', 'no'],
      reportedSelection: [],
      date: null,
      dateFocus : null,
      types: ["robo", "violacion", "violencia", "drogas", "prostitucion"],
      type: null,
      description: ''
    }

    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onStartDateFocusChange = this.onStartDateFocusChange.bind(this);
    this.handleReportedSelection = this.handleReportedSelection.bind(this);
    this.handleCrimeTypeSelect = this.handleCrimeTypeSelect.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  onStartDateChange(newStartDate){
    this.setState({ date: newStartDate }, () => console.log(" date is: " + this.state.date));
  }

  onStartDateFocusChange(focusedF){
    this.setState({ dFocus: focused },() => console.log(" date focus change is: " + this.state.dateFocus));
  }

  handleReportedSelection(e) {
  this.setState({ reportedSelection: [e.target.value] }, () => console.log('reportado ', this.state.reportedSelection));
}

  handleCrimeTypeSelect(e) {
  this.setState({ type: e.target.value }, () => console.log('tipo de crimen', this.state.type));
  }
  handleDescriptionChange(e) {
  this.setState({ description: e.target.value }, () => console.log('description', this.state.description));
}

  render(){
    return(
      <div>
        <h2 className="panelTitle">Agrega un nuevo crimen</h2>

        <ReportedSelector
					title={'Reporto usted el crimen con las autoridades?'}
					setName={'reported'}
					type={'radio'}
					controlFunc={this.handleReportedSelection}
					options={this.state.reportedSelections}
					selectedOptions={this.state.reportedSelection} />

        Fecha


        <SingleDatePicker
          id="startDate-input"
          date={this.state.startDate}
          focused={this.state.startDateFocus}
          onDateChange={this.onStartDateChange}
          onFocusChange={({ focused }) => { this.setState({ startDateFocus: focused }); }}
        />

        Qué tipo de crimen fue?

        <CrimeTypeSelector
					name={'crime-type'}
					placeholder={'Selecciona el tipo de crimen'}
					controlFunc={this.handleCrimeTypeSelect}
					options={this.state.types}
					selectedOption={""} />

          <Description
  					title={'Cuenta un poco del crimen que presenciaste'}
  					rows={5}
  					resize={false}
  					content={this.state.description}
  					name={'crime-description'}
  					controlFunc={this.handleDescriptionChange}
  					placeholder={'Se lo más específico posible'} />

      </div>

    );
  }
}

export default CrimeAdder;
