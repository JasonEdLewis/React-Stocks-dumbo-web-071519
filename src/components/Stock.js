import React from "react";

const Stock = props => {
  const { id, type, name, ticker, price } = props.info;
  
  return (
    <div >
      <div className="card" sector={type}>
        <div
          className="card-body"
          onClick={() => {
            props.exchange(id);
          }}
        >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
