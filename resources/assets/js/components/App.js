// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

function App({ children }) {
  return (
    <Grid fluid>
      {children}
    </Grid>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
