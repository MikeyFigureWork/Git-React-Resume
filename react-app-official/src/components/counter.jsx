import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        {
          " " /*I Wonder Why Prettier Automatically Puts Braces in the Return? Is It Cause a New Standard Format to Encapulate the Return Elements in Braces?*/
        }
        {<img src={this.state.imageUrl} alt="" />}
        {/* <span className="badge badge-primary">{this.formatCount()}</span> */
        /*Old Way To Do It, No Longer Works*/}
        {/* <span style={ { fontSize:30 } } className="badge bg-primary">{this.formatCount()}</span> */
        /*Can Also Do Direct Values for Style*/}
        <span style={this.styles} className="badge bg-primary m-2 ">
          {this.formatCount()}
        </span>{" "}
        {/*New Bootstrap Standard by Doing "bg-'whatever'" instead of "badge-'whatever'"*/}
        {/* So Comments Need to Be Encapsulated within a Curly Braces and the Comment Indicators for JSX: https://www.educative.io/answers/how-to-add-comments-in-jsx */}
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
