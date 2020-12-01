import React from "react";
import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

class App extends React.PureComponent {
  state = {
    currentLoadedComponent: 0,
    payMethod: "",
  };

  handleAddPayment(pay) {
    this.setState({ payMethod:pay });
  }
  handleAddPayment = this.handleAddPayment.bind(this);

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          React How to Pass Data from Child to Parent
        </h1>
        {this.state.payMethod && (
          <h2 className="text-center text-primary">
            Hello, {this.state.payMethod}
          </h2>
        )}
        <div className="row justify-content-center mt-5">
          <div className="col-auto">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className={`btn ${
                  this.state.currentLoadedComponent === 1
                    ? "btn-success"
                    : "btn-secondary"
                } `}
                onClick={() => this.setState({ currentLoadedComponent: 1 })}
              >
                Load Class Based Component
              </button>
              <button
                type="button"
                className={`btn ${
                  this.state.currentLoadedComponent === 2
                    ? "btn-success"
                    : "btn-secondary"
                } `}
                onClick={() => this.setState({ currentLoadedComponent: 2 })}
              >
                Load Functional Component
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.currentLoadedComponent === 1 && (
              <ClassBased onPaymentAdded={this.handleAddPayment} />
            )}
            {this.state.currentLoadedComponent === 2 && (
              <FunctionBased onPaymentAdded={this.handleAddPayment} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
