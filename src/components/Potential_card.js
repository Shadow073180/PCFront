import React, {Component} from 'react'
import {Card, CardImg, CardText,
  CardTitle, CardSubtitle, Button} from 'reactstrap';



class Potential_Card extends Component{
  constructor(props){
    super(props)
     
  }

render(){
  return(
    <div>
      <Card >
        <CardImg className='cardImage' top-width='100%'a href= {this.props.dater.dater_photo}/>
            <CardTitle className='cardTitle'><b> {this.props.dater.dater_name}</b></CardTitle>
            <CardSubtitle className='cardSubtitle'><b>{this.props.dater.city}, {this.props.dater.state}</b></CardSubtitle>
            <CardText className='cardText'><b>{this.props.dater.age}</b></CardText>
            <Button>See Profile</Button>
      </Card>
    </div>

      
      
  )
}
}


export default Potential_Card