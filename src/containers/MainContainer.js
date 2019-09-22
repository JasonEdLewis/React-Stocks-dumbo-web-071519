import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  
  state ={
      allStocks: [],
      displayStocks: [],
     portfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({
        allStocks: stocks,
        displayStocks: stocks
        
    }))
  }


  removeFromPortfolio=(id)=>{
      

  }
  addToPortfolio =(id)=>{
    const purchasedStock = this.state.allStocks.find(stock => stock.id === id)

      this.setState({
        portfolio: [purchasedStock,...this.state.portfolio]
  })
        // console.log(purchasedStock)
  }

handleSelect=()=>{

}

handleRadios=()=>{
        

}
  render() {
    return (
      <div>
        <SearchBar selctFilter={this.handleSelect} radioFilters={this.handleRadios}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} purchase={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} remove={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
