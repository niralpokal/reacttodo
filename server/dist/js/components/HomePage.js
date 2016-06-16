import React from 'react'
import TodoList from './TodoList.js'
import {Grid, Row, Col} from 'react-bootstrap'

class HomePage extends React.Component{

  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col mdOffset={3} md={6} className="text-center">
            <h3>Welcome! </h3>
          </Col>
          <TodoList></TodoList>
        </Row>
      </Grid>
    )
  }
}

export default HomePage
