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

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called, Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId); //Set "counters" to a new array. The new array is "counters" modified with 1 less counter, it is of matching id.
    //this.setState({counters: counters});                                //The syntax I guess knows by what each value is? idk. But letting 'React' know there are changes to counters.
    this.setState({ counters }); //Since the 'key' and 'value' are the same in the line above, it can be simplified to this.
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
            counter={counter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
