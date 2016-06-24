import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { Row, Col} from 'react-bootstrap';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: {
        open: false
      },
      dialog: {
        open: false
      },
      snackbar: {
        open: false,
        message: ''
      }
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }


  toggleDrawer() {
    this.setState({drawer:{open: !this.state.drawer.open}});
  }

  closeDrawer() {
    this.setState({drawer:{open:false}});
  }

  closeSnackbar() {
    this.setState({snackbar:{open:false}});
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <AppBar
            title="Perlur Business Stack"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />
          <Drawer
            docked={false}
            open={this.state.drawer.open}
            onRequestChange={(open) => this.toggleDrawer({open})}
          >
            <List>
              <ListItem onTouchTap={this.closeDrawer}><Link to="/" onlyActiveOnIndex={true}>Login Screen</Link></ListItem>
              <ListItem onTouchTap={this.closeDrawer}><Link to="/invoice">Sample UI collection page</Link></ListItem>
            </List>
            </Drawer>
            <Snackbar
              open={this.state.snackbar.open}
              message={this.state.snackbar.message}
              action="undo"
              autoHideDuration={5000}
              onRequestClose={this.closeSnackbar}
            />
            <Dialog
              modal={false}
              open={this.state.dialog.open}
            >
              <CircularProgress
                style={{
                  margin: '0 auto'
                }}
              />
            </Dialog>
        </Col>
      </Row>
    );
  }
}

Header.propTypes = {
};

export default Header;
