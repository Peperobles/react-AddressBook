import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

// Components
import { FormUpdate } from '../FormUpdate/FormUpdate';


class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Update</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             <FormUpdate updateUser={this.props.updateUser} value={this.props.value} users={this.props.users} />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Toggle;