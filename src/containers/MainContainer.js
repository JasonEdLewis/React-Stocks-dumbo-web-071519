import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    allStocks: [],
    displayStocks: [],
    portfolio: [],
    Alphabetically: false,
    Price: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks =>
        this.setState({
          allStocks: stocks,
          displayStocks: stocks
        })
      );
  }

  removeFromPortfolio = id => {
    debugger;
    console.log(id);
  };
  addToPortfolio = id => {
    const purchasedStock = this.state.allStocks.find(stock => stock.id === id);
    !this.state.portfolio.includes(purchasedStock)
      ? this.setState({ portfolio: [purchasedStock, ...this.state.portfolio] })
      : alert("You own this Stock already");
    const stocksLeftToBuy = this.state.displayStocks.filter(
      stock => stock !== purchasedStock
    );
    // debugger
    this.setState({
      displayStocks: stocksLeftToBuy
    });
  };

  buyOrSell = id => {
    let own = this.state.portfolio.find(stock => stock.id === id);
    debugger;
    return own ? this.removeFromPortfolio(id) : this.addToPortfolio(id);
  };

  sorter = attr => {
    // debugger
    let sorted;
    attr === "Alphabetically"
      ? (sorted = this.state.displayStocks.sort((a, b) =>
          a.ticker > b.ticker ? 1 : -1
        ))
      : (sorted = this.state.displayStocks.sort((a, b) =>
          a.price < b.price ? 1 : -1
        ));
    this.setState({
      displayStocks: sorted
    });
  };

  selectFilter = attribute => {
    // debugger
    if (attribute !== "") {
      const atr = this.state.allStocks.filter(
        stock => stock.type === attribute
      );
      this.setState({
        displayStocks: atr
      });
    } else {
      this.componentDidMount();
    }
  };
  render() {
    return (
      <div>
        <SearchBar selectFilter={this.selectFilter} radioSorter={this.sorter} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.displayStocks}
              buySell={this.buyOrSell}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.state.portfolio}
              buySell={this.buyOrSell}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
