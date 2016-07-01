import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../common/Header';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    Formsy.addValidationRule('isValidToken', function (values, value) {
      console.log(values, value);
      if(typeof(value) === 'undefined') return true;
      return (value.length == 0 || value.length == 6);
    });

  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col md={9}>
            <h1>Welcome to Perlur</h1>
            <h2>Best integrated business ICT</h2>
            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Scalable Services</h2>
            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Smart and affordable applications</h2>
            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
          <Col md={3}>
            <Paper zDepth={0}>
              <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError}
              >
                <FormsyText
                  hintText="Enter your e-mail."
                  floatingLabelText="E-mail"
                  name="email"
                  validations="isEmail"
                  validationError="E-mail is not a valid e-mail address"
                  required
                /><br />
                <FormsyText
                  hintText="Enter your password."
                  floatingLabelText="Password"
                  type="password"
                  name="password"
                  validations="minLength:1"
                  validationError="Plese, enter your password"
                  required
                /><br />
                <FormsyText
                  hintText="Enter your token PIN."
                  floatingLabelText="Token PIN"
                  type="password"
                  name="token"
                  validations="isValidToken"
                  validationError="Please, enter your token or leave the field blank"
                  required
                /><br />
                <RaisedButton
                  type="submit"
                  label="Log-in"
                  primary
                  disabled={!this.state.canSubmit}
                />
              </Formsy.Form>
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
