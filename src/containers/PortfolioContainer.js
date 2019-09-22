import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

    portfolioBuilder=()=>{
      return this.props.myStocks.map(stock =>{
        return Stock(stock.id,stock.name,stock.price, stock.ticker, stock.type,`${<button>{stock.remove}</button>}`)
      })
    }

  render() {
 
    return (
      <div>
        <h2>My Portfolio</h2>

          {
           this.portfolioBuilder()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
