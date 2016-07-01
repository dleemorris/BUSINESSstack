import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../common/Header';
import RaisedButton from 'material-ui/RaisedButton';

import * as invoiceActions from '../../actions/invoiceActions';
import InvoicesTable from './InvoicesTable';

class InvoicesPage extends React.Component {
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
        <Header />
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

InvoicesPage.propTypes = {
  invoices: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    loadInvoices: PropTypes.func,
  }),
};

function mapStateToProps(state) {
  return {
    invoices: state.invoiceReducer.invoices,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(invoiceActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoicesPage);
