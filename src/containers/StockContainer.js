import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  theStocks =()=>{
    return this.props.stocks.map(stock =>{
       return Stock(stock.id, stock.name,stock.price, stock.ticker, stock.type,this.props.purchase)
    }
    )

      
  }

  render() {
    

    return (
      <div>
        <h2>Stocks</h2>
        {
          this.theStocks()
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
