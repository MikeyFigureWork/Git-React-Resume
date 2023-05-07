import React, { Component } from "react";

//Follow the Right Bootstrap Version Documentation: https://getbootstrap.com/docs/5.1/components/badge/
//By Accident I Was Using: https://getbootstrap.com/docs/4.0/components/badge/
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NavBar:
          <span className="badge bg-primary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             NavBar:
//             <span className="badge bg-primary">{this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
