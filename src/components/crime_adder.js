import React, {Component} from 'react';

class CrimeAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crimeToAdd: [],
      date: null,
      type: null,
      description: ''
    }
  }

  render(){
    return(
      <div>
        Testing Crime adder
      </div>

    );
  }
}

export default CrimeAdder;
