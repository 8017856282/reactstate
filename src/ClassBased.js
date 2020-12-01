import React from "react";

class ClassBasedComponent extends React.PureComponent {
  payInputRef = React.createRef();

  handleFormSubmit(e) {
    e.preventDefault();
    const enterPayment = this.payInputRef.current.value;

    if (enterPayment) {
      this.props.onPaymentAdded(enterPayment);
    }
  }

  handleFormSubmit = this.handleFormSubmit.bind(this);

  render() {
    return (
      <div className="container w-50 mt-5">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="pay"
              placeholder="Enter Payment"
              ref={this.payInputRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ClassBasedComponent;
