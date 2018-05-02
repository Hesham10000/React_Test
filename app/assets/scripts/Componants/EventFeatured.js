import React, {Componant} from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-image';

export default class EventFeatured extends React.Component {
  constructor(props){
    super(props);
    this.state = {default:
      {
        src:'./assets/images/yoga1.jpg',
        name: 'Yoga Class'
      }
    };
  }
  render() {
    return (

      <div className="row__40 event__featured">
        <h2 className="event__name"> {this.props.event.name ? this.props.event.name : this.state.default.name } </h2>
        <Img className="event__featured__image"
         src={this.props.event.eventGroup.imageUrl ? this.props.event.eventGroup.imageUrl: this.state.default.src }></Img>
      </div>

    );
  }
}
