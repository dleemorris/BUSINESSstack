import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../common/Header';


class LoginPage extends React.Component {
  submitLogin() {
    // there will be a method, now it is fo ESLint to pass
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col md={9}>
            <h1>Welcome to Perlur</h1>
            <h2>Best integrated business ICT</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Scalable Services</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Smart and affordable applications</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
          <Col md={3}>
            <Paper zDepth={0}>
              <TextField
                hintText="Enter your e-mail."
                floatingLabelText="E-mail"
              /><br />
              <TextField
                hintText="Enter your password."
                floatingLabelText="Password"
                type="password"
              /><br />
              <TextField
                hintText="Enter your token PIN."
                floatingLabelText="Token PIN"
                type="password"
              /><br />
              <RaisedButton label="Log-in" primary />
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
