import React from "react";
import { Link } from "react-router";

class Authentication extends React.Component {
  render() {
    const loginView = <div>loginView</div>;

    const registerView = <div>registerView</div>;

    return (
      <div className="container auth">
        <Link className="logo" to="/">
          MEMOPAD
        </Link>
        <div className="card">
          <div className="header blue white-text center">
            <div className="card-content">
              {this.props.mode ? "LOGIN" : "REGISTER"}
            </div>
          </div>
          {this.props.mode ? loginView : registerView}
        </div>
      </div>
    );
  }
}
