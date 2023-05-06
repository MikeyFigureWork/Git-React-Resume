import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are 'No Tags'</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /*
  constructor() {
    super();
    console.log("Constructor of Counter", this);
    //Remember This, Functions in JavaScript are 'Objects'. Where They Have Their Own 'Properties' and 'Methods'.
    //One Being 'bind()' Which Allows Us To Add Functionality on Top of a Function.
    //Here in the Line Below, We are Calling 'this.handleIncrement.bind(this)' which returns an Instance of the Class with Additonal Access to the "this" keyword.
    //Binding "handleIncrement" to "this".
    //TLDR: Every Function has 'Properties' and 'Methods', here we are using 'bind' To Combine "handleIncrement" to "this" keyword. So handleIncrement gets access to "this".
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  handleIncrement = (product) => {
    console.log("Increment Clicked", this.state.count);
    //console.log("Increment Clicked",this.state.count); //Wrong Code At The Moment Since We Do Not Have Access to the State Property at This Time.
    //The Error is Cause We Got No Access to 'this' since in JavaScript, 'this' reacts differently...
    //Reason Is: 'this' refers to the space that called it. As a Standalone function it is 'undefined' as 'this' properties don't exist.
    //But with a reference to the 'Object'. It Can Access the Proper Element in that space using 'this'.
    //Currently Using the Current Space as Defined as a 'Standalone Object'
    // (Fail:) functionCall() / (Works:) obj.functionCall()
    //To Fix This, Lets Add a Constructor!

    //this.state.count++; //This Line Works, Technically. Cause it Works, but React is Not Aware of this Change and Therefore doesn't make Changes on the DOM.
    //This is DIRECTLY, affecting the "state" in which is a bad thing, something not normal to be done in the 'React Workflow'.

    this.setState({ count: this.state.count + 1 }); //This Line Works, as we are Telling React there is a State Change and therefore Causes the DOM to make changes.
    //Still Not Really Good but a Method to let React Take Action when Needed.

    console.log(product);
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children} */}
        <h4>Counter #{this.props.counter.id}</h4>
        {
          " " /*I Wonder Why Prettier Automatically Puts Braces in the Return? Is It Cause a New Standard Format to Encapulate the Return Elements in Braces?*/
        }
        {<img src={this.state.imageUrl} alt="" />}
        {/* <span className="badge badge-primary">{this.formatCount()}</span> */
        /*Old Way To Do It, No Longer Works*/}
        {/* <span style={ { fontSize:30 } } className="badge bg-primary">{this.formatCount()}</span> */
        /*Can Also Do Direct Values for Style*/}
        {/* <span style={this.styles} className="badge bg-primary m-2 ">
          {this.formatCount()}
        </span>{" "} */}
        {/*New Bootstrap Standard by Doing "bg-'whatever'" instead of "badge-'whatever'"*/}
        {/* So Comments Need to Be Encapsulated within a Curly Braces and the Comment Indicators for JSX: https://www.educative.io/answers/how-to-add-comments-in-jsx */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>{" "}
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //Passing a Reference to a Function Type "handleIncrement('parameter')"
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && "Create a New Tag due to Emptiness"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    //let classes = "badge m-2 badge-"; //This Line Doesn't Work, Remeber That, Cause of Updated 'Boot Strap' uses 'bg-' instead of 'badge-' for additional modifiers.
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
