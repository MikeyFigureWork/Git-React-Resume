import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  handleIncrement = (counter) => {
    //console.log(counter);
    //...'triple dot' Clones the Data. A 'Copy'.
    const counters = [...this.state.counters]; //First Make a Local 'counters' 'Copy Array' for the Function to Update in 'setState(counters = counters)' or 'setState(counters)'
    const index = counters.indexOf(counter); //Grab The Appropriate Index from the 'counter' Component Parameter (IDK How, but counter knows it's index when referenced to an array?)
    counters[index] = { ...counter }; //Make the Index of the 'counters' Local Array a 'Copy' of the 'counter' Component. (This is Possible?)
    counters[index].value++; //Increment That Value (Makes Sense...)
    this.setState({ counters }); //Update State with a 'counters' Array of Updated "values" (Okay...)
    //Does the 'const' for 'counters' & 'index' make the values not only 'Local' to the Function, but Restrict their 'Data Type'? (Maybe My Mind is Restricted on Data Types and Stuff)
    //Also Reminder, "setState" Calls Render Again. So We Update the Array in 'State' and We Re-Render the Data from 'State' as Specified by React when Called.
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called, Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
