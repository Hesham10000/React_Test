import React, {Componant} from 'react';
import ReactDOM from 'react-dom';


export default class EventContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {description:'', clicked:'no', text:'...more', counter:0,
    default:{
      info: 'Yoga class',
      date: 'N/A',
      time: '12:00',
      location: {
                      name:'Im Kleppenhof',
                      city: 'Köln',
                      street:'50670'
                  },
      trainers_name: 'Andy',
      trainers_initials: 'A',
      description: 'Yoga für Einsteiger. Sie haben bisher keine oder wenig Erfahrung mit Yoga'
    }}
    this.onClick= this.onClick.bind(this);
  }
  componentDidMount(){
    let description = this.props.event.descriptions[0].text.replace(/<(?:.|\n)*?>/gm, '');
    description = description.substr(0,70);
    this.setState({description:description})
  }
  render() {
    let initials = this.props.event.trainers[0].name+'  ';
    initials = initials.split(' ');
    let description= this.state.description;

    return (

      <div className="row__40 event__content" >
        <div className="row row__gutters row__b-margin ">
          <p className="row__50 event__date font"><small className=" fa fa-clock-o"></small> <strong> {this.props.event.date ? this.props.event.date :this.state.default.date} </strong> <small className="time">{this.props.event.time ? this.props.event.time : this.state.default.time} Uhr </small>  </p>
          <p className="row__50 event__info font"> <i className=" fa fa-info-circle"></i>{this.props.event.name ? this.props.event.name : this.state.default.info} </p>
        </div>
        <div className="row row__gutters row__b-margin">
          <p className="row__50 event__place font"> <i className=" fa fa-map-marker"></i>  {this.props.event.location.name}, {this.props.event.location.city}, {this.props.event.location.street} </p>
          <p className="row__50 event__instructor font"> <a href={this.props.event.trainers[0].imageUrl}> <i className=" event__instructor__before"> {initials[0][0]} {initials[1][0]}</i> {this.props.event.trainers[0].name} </a> </p>
        </div>
        <div className="event__description font">
          <p> {description} <span onClick={this.onClick} className="more"> { description.length > 30 ? this.state.text:''} </span>
          </p>
        </div>
      </div>

    );
  }/*End of render*/
  onClick(){
    if(this.state.clicked =='no')
    {
      this.setState({description:this.props.event.descriptions[0].text.replace(/<(?:.|\n)*?>/gm, '')});
      this.setState({clicked: 'yes'});
      this.setState({text:'<-- less'});
      this.setState({counter:1});
    }
    else {
      this.setState({description:this.props.event.descriptions[0].text.replace(/<(?:.|\n)*?>/gm, '').substr(0,70) });
      this.setState({clicked: 'no'});
      this.setState({text:'...more'});
    }

  }
}
