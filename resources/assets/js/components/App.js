// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <Grid fluid={true}>
        {this.props.children}
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
