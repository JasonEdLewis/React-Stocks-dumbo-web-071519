import React from 'react'


const Stock = (id,name,price, ticker, type,buy ) => (

  <div key={id}>

    <div className="card" sector={type}>
      <div className="card-body" onClick={()=>{buy(id)}}>
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">
            {ticker}:   ${price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
