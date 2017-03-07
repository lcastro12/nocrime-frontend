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
        <h2 className="panelTitle">Reporta un Crimen</h2>
        <div className="panelField">
          <div className="panelField-title">
            <h3>Denunciado</h3>
          </div>
        </div>
        <div className="panelField-content">
        <ReportedSelector
					title={'Reportaste el crimen con las autoridades?'}
					setName={'reported'}
					type={'checkbox'}
					controlFunc={this.handleReportedSelection}
					options={this.state.reportedSelections}
					selectedOptions={this.state.reportedSelection} />
        </div>
        <div className="row">
          <div className="col-md-6">
        <div className="panelField">
          <div className="panelField-title">
            <h3>Fecha</h3>
          </div>
          <div className="panelField-content">
            <p>Cuando sucedio?</p>
          <SingleDatePicker
              id="startDate-input"
              date={this.state.date}
              focused={this.state.dateFocus}
              onDateChange={this.onStartDateChange}
              onFocusChange={({ focused }) => { this.setState({ dateFocus: focused }); }}
              numberOfMonths={1}
          />
          </div>
        </div>
          </div>
          <div className="col-md-6">
        <div className="panelField">
          <div className="panelField-title">
            <h3>Tipo</h3>
          </div>
          <div className="panelField-content">
            <p>Qué tipo de crimen fue?</p>
            <div className="textArea">
        <CrimeTypeSelector
					name={'crime-type'}
					placeholder={'Tipo de crimen'}
					controlFunc={this.handleCrimeTypeSelect}
					options={this.state.types}
					selectedOption={this.state.type} />
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="panelField">
          <div className="panelField-title">
            <h3>Descripción</h3>
          </div>
          <div className="panelField-content">
          <Description
  					title={'Cuenta un poco del crimen que presenciaste'}
  					rows={5}
            cols={50}
  					resize={false}
  					content={this.state.description}
  					name={'crime-description'}
  					controlFunc={this.handleDescriptionChange}
  					placeholder={'Cuentanos lo que sucedio.'} />
          </div>
        </div>
        <div className="panelField aceptarCancelar">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <a className="btn-landingPage btn btn-lg btn-default irAPanelFiltros">Aceptar</a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <a className="btn-landingPage btn btn-lg btn-default irAPanelFiltros" >Cancelar</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default CrimeAdder;
/*Luego de agregar, no se quita la información si quiero agregar otro crimen/*
