import React from "react";

class SearchBar extends React.Component {
  state = {
    Alphabetically: "",
    Price: ""
  };

  handleChange = e => {
    if(e.target.type === "select-one"){
      this.props.selectFilter(e.target.value)
    }
    else {
     
     this.props.radioSorter(e.target.value)
    }

      }
      

  render() {
    console.log(this.state.Alphabetically)
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.Alphabetically}
            onChange={this.handleChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.Price}
            onChange={this.handleChange}
          />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleChange}>
            <option value="">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;
