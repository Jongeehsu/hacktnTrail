import React , {Component,useState} from 'react';
import {Card,CardImg, CardText ,CardTitle, CardSubtitle,Button,CardBody } from 'reactstrap';
import styled from 'styled-components';
import moment from 'moment';






class PeopleCard extends React.Component {
    constructor(props) {
        super(props);

        
        
    }

   

render() {

  


  var a = Math.ceil(Math.random()*10)
  var b = Math.ceil(Math.random()*10)
  a = a+ ""
  b = b + ""
  return (
  <div>   
  <Card>
    <CardImg
      alt="Card image cap"
      src={"https://picsum.photos/318/1"+a+b} 
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {this.props.person.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {this.props.person.event_type
        }
      </CardSubtitle>
      <CardText>
       Start Date :{moment(parseInt(this.props.person.start_time)).format("YYYY-MM-DD HH:mm:ss")}
      </CardText>
      <CardText>
       End Date :{moment(parseInt(this.props.person.end_time)).format("YYYY-MM-DD HH:mm:ss")}
      </CardText>
      <CardText>
      Event Description : 
      {this.props.person.description}
      </CardText>
      <CardText> 
      Public website:{this.props.person.public_url}
      </CardText>
      <CardText>
      Private website:{this.props.person.private_url}
      </CardText>
    

      
      <Button color='primary'>
       Related Events
      </Button>
    
    </CardBody>
  </Card>
  </div> 
  

    )
}

}

export default PeopleCard;