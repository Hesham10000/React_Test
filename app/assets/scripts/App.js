//import $ from 'jquery';
import React, {Componant} from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-image';
import EventFeatured from './Componants/EventFeatured';
import EventContent from './Componants/EventContent';
import EventBooking from './Componants/EventBooking';
import Search from './Componants/Search';


class EventList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {events:[],provider:'Yogashop', startDateTime:'2018-03-26'};
      this.updateSearch= this.updateSearch.bind(this);
      this.Search = this.Search.bind(this);
  }
//-------------------------- ComponantWillMount----------------------------------
  componentWillMount() {
    this.Search()

  } /*End of componantWillMount*/
//----------------------------- Start Of Render Function -----------------------
  render() {
      let stateExist = this.state.events.length;
      if(!stateExist){
        return(
          <div className="wrapper wrapper__normal">
              <Search onClick={this.updateSearch} />
              <h3 className="not-found"> Unfortunately there are no events found. Please try again later. </h3>
          </div>
        );
      }
      return(
        <div className="wrapper wrapper__normal">
            <Search onChange={this.updateSearch} />
            <h3> React List Design: </h3>
            <p className="border"></p>
          {this.state.events.map((item,index)=>
            <div className="row row__gutters event">
              <EventFeatured key={'EventFeatured'+index} event={item}/>
              <EventContent key={'EventContent'+ index} event={item}/>
              <EventBooking key={'EventBooking'+ index} event={item}/>
            </div>
          )}
        </div>
      );
  }
//-----------------------------Update Search Function -----------------------------
updateSearch(provider,startDateTime){
  if(!provider){provider=this.state.provider};
  if(!startDateTime)(startDateTime=this.state.startDateTime);
  this.Search(provider, startDateTime)
  this.setState({provider:provider, startDateTime:startDateTime});

}
//-----------------------Start of Search function ------------------------------
Search(ProviderName='Yogashop', FromDate='2018-04-21'){
  /*1- fetch the data from https://api.fitogram.pro  */
  fetch(`https://api.fitogram.pro/providers/${ProviderName}/events/public?from=${FromDate}`)
  .then(result=>result.json())
  .then(events=>this.setState({ events:events }))
  .then(()=>{
    /*2- extract the date and time from startDateTime*/
    let date =[] ;
    let time =[];
    /*3- extract the date*/
    this.state.events.map((item,index)=>{
      date[index] = item.startDateTime.split('T')[0];
      time[index] = item.startDateTime.split('T')[1];
    });
    /*4- extract the time*/
    time.map((item,index)=>{
     time[index]= item.split('+')[0];
    });
    /*5- Update the states and add to it the date and time properities*/
    this.setState({date:date,time:time});
    let newState = Object.assign({}, this.state.events);
    this.state.events.map((item,index)=>{
      newState[index].date = date[index];
      newState[index].time = time[index];
    });
    this.setState(newState);
  });/*End of then*/
}
}// End of class

ReactDOM.render(<EventList />,document.getElementById('root') );
