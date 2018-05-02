import React, {Componant} from 'react';
import ReactDOM from 'react-dom';


export default class EventBooking extends React.Component {
  render() {
    let seats = this.props.event.seats;
    let booked = this.props.event.seatsBooked;
    let verfügbar= seats - booked ;
    return (
      <div className="row__auto row__20__t-margin event__booking  ">
        <p className=" event__available font "> <i className=" fa fa-user-circle"></i> {verfügbar}/{seats} verfügbar </p>
        <button className="btn btn__small btn__centered btn__100 row__b-margin row__t-margin "><a className="default" href="https://www.fitogram.pro/preise/"> Zur Buchung </a></button>
        <p className="event__deadline font"> Buchung bis: <br/> {this.props.event.date} - {this.props.event.time} Uhr </p>
      </div>

    );
  }
}
