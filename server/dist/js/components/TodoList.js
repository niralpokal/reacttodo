import React from 'react';
import {Row, Col} from 'react-bootstrap'
import TodoListItem from './TodoListItem.js'

class TodoList extends React.Component{
  constructor(){
    super();
    this.state ={item: [{id:1, text:"Hello"}, {id:2, text:"World"}]}
  }

  render(){
    let list = function(item){
      return(
        <TodoListItem key={item.id}>{item.text}</TodoListItem>
      )
    }
    return(
      <Row className="show-grid">
        <Col md={6} mdOffset={3} className="text-center">
          <ul className="list-group">{this.state.item.map(list)}
          </ul>
        </Col>
      </Row>
    )
  }
}
export default TodoList
