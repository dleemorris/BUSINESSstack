import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-9">
            <List>
              <ListItem primaryText="All mail" leftIcon={<ActionInfo />} />
              <ListItem primaryText="Trash" leftIcon={<ActionInfo />} />
              <ListItem primaryText="Spam" leftIcon={<ActionInfo />} />
              <ListItem primaryText="Follow up" leftIcon={<ActionInfo />} />
            </List>
        </div>
        <div className="col-md-3">
            <TextField
              hintText="Zadejte svůj email"
              floatingLabelText="Váš email"
            /><br />
            <TextField
              hintText="Zadejte své heslo"
              floatingLabelText="Vaše heslo"
              type="password"
            /><br />
            <RaisedButton label="Přihlásit" primary={true} />
        </div>
      </div>
    );
  }


}

export default LoginPage;
