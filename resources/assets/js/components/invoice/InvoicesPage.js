import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../common/Header';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

import * as invoiceActions from '../../actions/invoiceActions';
import InvoicesTable from './InvoicesTable';

class InvoicePage extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAddPage = this.redirectToAddPage.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadInvoices();
   }

  redirectToAddPage() {
    browserHistory.push('/invoice');
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Invoices</h1>
        <InvoicesTable invoices={this.props.invoices} />
        <RaisedButton
          label="Add Invoice"
          onClick={this.redirectToAddPage}
        />
      </div>
    );
  }
}

InvoicePage.propTypes = {
  invoices: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    invoices: state.invoiceReducer.invoices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(invoiceActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
