import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, ButtonToolbar, Button } from 'react-bootstrap';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log('search',this.state.query);
  }

  render() {
    return (
      <div>
        <h2>Book Explorer!</h2>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for a book"
                onChange={event => this.setState({query: event.target.value })}
              />
              <ButtonToolbar>
                <Button variant="primary" onClick={() => this.search()}>Primary</Button>
              </ButtonToolbar>
            </InputGroup>
          </FormGroup>
      </div>
    )
  }
}

export default Global;
