import React from 'react';
import {Row, Col} from 'react-bootstrap'

class TodoList extends React.Component{

  render(){
    return(
      <Row className="show-grid">
        <Col md={6} mdOffset={3} className="text-center"> Hello</Col>
        <Col md={6} mdOffset={3} className="text-center"> World</Col>
      </Row>
    )
  }
}
export default TodoList
