import React, { Component } from "react"; //How Come This Wasn't Here Before and It Worked?!!
import logo from "./logo.svg";
import "./App.css";
//import Counters from "./components/counters "; //Holy Fuck This Line Was Giving Me An Issue Due to Having a Space in the Pathwway!!!!
import Counters from "./components/counters"; //Right Version
import NavBar from "./components/navbar";

class App extends Component {
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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
