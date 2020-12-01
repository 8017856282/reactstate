import React, { memo, useRef } from "react";

let FunctionBasedComponent = (props) => {
  const payInputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const enterPayment  = payInputRef.current.value;

    if (enterPayment) {
      props.onPaymentAdded(enterPayment);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
         <input
            type="text"
            className="form-control"
            id="pay"
            placeholder="Enter Payment"
            ref={payInputRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

FunctionBasedComponent = memo(FunctionBasedComponent);

export default FunctionBasedComponent;
