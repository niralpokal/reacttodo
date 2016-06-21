import React from 'react';
import {Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import TodoListItem from './TodoListItem.js'

class TodoList extends React.Component{
  constructor(){
    super();
    this.state ={item: [{id:1, text:"Hello"}, {id:2, text:"World"}]}
  }
  setTodo(e){
    this.state.temp = {id:3, text:e.target.value};
  }
  updateList(e){
    this.state.item.push(this.state.temp);
    var a = this.state.item
    this.setState({
      item: a
    })
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
          <Form inline={true}>
            <FormGroup>
              <FormControl
                type="text"
                value={this.newItem}
                onChange={this.setTodo.bind(this)}
              >
              </FormControl>
              <Button
                className="btn-default"
                onClick={this.updateList.bind(this)}>New Todo
              </Button>
            </FormGroup>
          </Form>
          <br />
          <ul className="list-group">{this.state.item.map(list)}
          </ul>
        </Col>
      </Row>
    )
  }
}
export default TodoList
