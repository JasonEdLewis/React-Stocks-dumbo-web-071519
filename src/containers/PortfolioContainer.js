import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


    portfolioBuilder=()=>{
      return this.props.myStocks.map(stock =>{
        return <Stock key={stock.id} info={stock} exchange={this.props.buysell}/>
      })
    }
  render() {
//  console.log(this.props)
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
