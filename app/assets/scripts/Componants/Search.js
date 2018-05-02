import React, {Componant} from 'react';
import ReactDOM from 'react-dom';
//import Img from 'react-image';

export default class Search extends React.Component {
  constructor(props) {
  super(props);
  this.state = { providerName: '', fromDate: '' };
  this.handleProviderChange = this.handleProviderChange.bind(this);
  this.handleDateChange = this.handleDateChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
}
  render() {
    return (

      <div className="search">
        <form onSubmit={this.handleSearch} className="row row__gutters search__form">
          <input type="text" onChange={this.handleProviderChange}
            value={this.state.providerName}  placeholder="EX: Yogashop"   className="  search__provider"/>
          <input type="text" onChange={this.handleDateChange}
            value={this.state.fromDate}  placeholder="EX: 2018-03-26"    className="  search__date"/>
          <button value='Search' className="search__submit btn btn__100 btn__small">Search </button>
        </form>
      </div>

    );
  }

  handleProviderChange(e) {
  this.setState({ providerName: e.target.value });
  this.props.onChange(this.state.providerName,this.state.fromDate);
  //this.handleSearch(e.parentNode);
}
handleDateChange(e) {
  this.setState({ fromDate: e.target.value });
  this.props.onChange(this.state.providerName,this.state.fromDate);
  //this.handleDateChange(e.parentNode);
}
  handleSearch(e){
    e.preventDefault();
    this.props.onClick(this.state.providerName,this.state.fromDate);

  }
}
