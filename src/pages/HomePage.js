
import React, {Component} from 'react'
import PCAPI from '../api/PCAPI.js'
import {Container, Row, Col} from 'reactstrap'
import Potential_Card from '../components/Potential_card'




class HomePage extends Component {
  state ={
    daters:[],
    
    
  }

  componentDidMount(){
    PCAPI.fetchDaters()
      .then((apiResponseJSON) => {
        this.setState({
          daters: apiResponseJSON
        })
      }
    )
  }

  
  render(){
    let dater_cards = this.state.daters.map(dater => {
      return(
            <Col sm='3'>
              <Potential_Card dater={dater} />
            </Col>
      )
    })
    return(
        <Container fluid>
          <Row>
            {dater_cards}
          </Row>
        </Container>
    )
    
    
}
}

export default HomePage