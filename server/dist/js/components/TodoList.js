import React from 'react';
import {Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import TodoListItem from './TodoListItem.js'

class TodoList extends React.Component{
  constructor(){
    super();
    var d = new Date
    var c = new Date
    d.setDate(d.getDate()+7);
    c.setDate(c.getDate()+7)
    this.state ={item: [{id:1, text:"Hello", date:c.toDateString()}, {id:2, text:"World", date:d.toDateString()}]}
  }
  setTodo(e){
    this.state.temp = {text:e.target.value}
  }
  updateList(e){
    e.preventDefault()
    document.getElementById('AddTodo').reset()
    var a = new Date()
    a.setDate(a.getDate()+7)
    this.state.temp.id = (this.state.item.length +1)
    this.state.temp.date = a.toDateString()
    this.state.item.push(this.state.temp);
    var newItem = this.state.item
    this.setState({
      item: newItem
    })
  }
  render(){
    let list = function(item){
      return(
        <TodoListItem key={item.id}>{item.text},  {item.date}</TodoListItem>
      )
    }
    return(
      <Row className="show-grid">
        <Col md={6} mdOffset={3} className="text-center">
          <Form
            inline={true}
            id="AddTodo"
            onSubmit={this.updateList.bind(this)}
            >
            <FormGroup>
              <FormControl
                type="text"
                value={this.todos}
                onChange={this.setTodo.bind(this)}
              >
              </FormControl>
              <Button
                className="btn-default"
                type="submit"
                >Add Todo
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
