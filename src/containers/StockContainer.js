import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  theStocks =()=>{
    return this.props.stocks.map(stock =>{
       return <Stock key={stock.id} info={stock} exchange={this.props.buySell}/>})
      
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
