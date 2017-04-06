import React, { Component, PropTypes } from 'react';
import connectContainer from 'redux-static';
import moment from 'moment';
import Markdown from 'react-markdown';
import formatCurrency from 'format-currency';
import parseAddress from 'parse-address';
//import smap from 'snailmailaddressparser';
import addressit from 'addressit';

import { orderActions } from '../../actions';

import './Order.css';

import { Error, LoadingPanel } from '../../components/Dashboard';
import * as dialogs from './Dialogs';
import {
  OrderActions, OrderDetailsTable, OrderDisplayDetailsTable, OrderTestersTable/*, OrderHeader, OrderProfile, OrderLogs,
 OrderInfo*/
} from '../../components/Orders';

export default connectContainer(class Order extends Component {
  static stateToProps = (state) => ({
    error: state.order.get('error'),
    loading: state.order.get('loading'),
    order: state.order,
    lineItems: state.order.get('record').toJS().lineItems,
    displayItems: state.order.get('record').toJS().displayItems
  });

  static actionsToProps = {
    ...orderActions
  }

  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    displayItems: PropTypes.array,
    lineItems: PropTypes.array,
    order: PropTypes.object,
    params: PropTypes.object,
    fetchOrder: React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchOrder(this.props.params.id);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.loading !== this.props.loading || nextProps.lineItems !== this.props.lineItems || nextProps.displayItems !== this.props.displayItems;
  }

  getTesterCost(item) {
    return item.tester.quantity ? item.tester.quantity * item.tester.cpu : 0;
  }

  getLineItemCost(item) {
    return item.quantity * item.cpu * item.size;
  }

  renderAddress(address, header) {
    let parts = address.split(',');
    let postalCode = undefined;
    let state = undefined;
    let city = undefined;
    if (parts.length >= 2) {
      const lastLine = parts.pop().trim();
      city = parts.pop().trim();
      const stateZipParts = lastLine.split(' ');
      state = stateZipParts.shift();
      postalCode = stateZipParts.join('');
    }

    return (
      <div className="address">
        { header ?
          <div className="address">
            {header}<br />
          </div> : '' }
        {
          state ? <div className="address">
            { parts.map(part => {
                console.log("part: ", part);
                return <div className="address">{part}<br /></div>;
              })
            }
            {city}, {state} &nbsp;{postalCode}<br />
          </div> : <div className="address">{address}<br /></div>
        }<br />
      </div>
    );
  }

  render() {
    const { loading, error, record } = this.props.order.toJS();
    const opts = { format: '%s%v', symbol: '$' };

    const order = record;
    const lineItems = this.props.lineItems || [];
    const displayItems = this.props.displayItems || [];

    let totalProduct = 0;
    let testerCost = 0;

    lineItems.forEach(item => totalProduct += this.getLineItemCost(item));
    displayItems.forEach(item => totalProduct += item.quantity * item.cost);
    lineItems.forEach(item => testerCost += this.getTesterCost(item));

    totalProduct += testerCost;

    const shippingAndHandling = (order.shipping || order.shipping === 0) ? (parseFloat(order.shipping) + parseFloat(totalProduct * .03)) : 0;

    const discount = order.discount ? parseFloat(order.discount) : 0;

    let totalPaid = 0;

    if (order.payments) order.payments.forEach(payment => totalPaid += payment.amount);

    let total = shippingAndHandling + totalProduct - discount - totalPaid;

    /* handle amount due of 0 that is off by a fraction of a penny below zero */
    if (Math.round(total*100) === 0) total = 0;

    const paymentInfo = `
\`\`\`
METHOD: Prepaid  Check  Credit Card

NAME ON CREDIT CARD: _________________________________________________________________

CREDIT CARD #: _______________________________________________________________________

EXP DATE: _________________________________________    CVV2: _________________________
\`\`\`
`;

    const terms1 = `
1. *Minimum of $100 applies only to opening orders*
1. *All orders prepaid or payment by Credit Card (CC)*
1. *A $25.00 charge on returned checks.*
1. *Shipping charges will be added to all orders.*
1. *Beauty Full Day LLC does not ship COD*
1. *Please notify us of special ship dates or events.*
1. *Prices are subject to change without notice*
`;

    const terms2 = `
8. *No merchandise may be returned without prior approval.*
1. *A 15% restocking fee will be charged on any item approved for return.*
1. *Tester pricing:*
   1. *1 oz special tester size, offered when available, at $1/tester*
   1. *Otherwise full-size testers available at 1/2 wholesale cost*
   1. *limit 1 tester per product ordered per 6 cases ordered*
`;

    return (
      <div className="order">
        <div className="row content-header">
          <div className="col-xs-12">
            <h2 className="pull-left">Order Details</h2>
            <div className="pull-right">
              <OrderActions
                order={this.props.order}
                deleteOrder={this.props.requestDeleteOrder}
                updateShipping={this.props.requestUpdateShipping}
                updateDiscount={this.props.requestUpdateDiscount}
              />
            </div>
          </div>
        </div>
        <LoadingPanel show={loading}>
          <div className="row">
            <div className="col-xs-12 wrapper">
              ORDER DATE: {moment.unix(order.date).format('MM/DD/YYYY')}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 wrapper">
              SHOW: {order.show && order.show.name}
            </div>
          </div>
          { order.store ?
          <div className="row">
            <div className="col-xs-12 wrapper address">
              {order.store.name}<br />
              Attn: {order.store.contact}<br />
              {this.renderAddress(order.store.shippingAddress)}
              { order.store.billingAddress ? this.renderAddress(order.store.billingAddress, 'bill to: ') : '' }
              {order.store.phone}<br />
              {order.store.email}
            </div>
          </div> : '' }
          <div className="row">
            <div className="col-xs-12 wrapper">
              <Error message={error}/>
            </div>
          </div>
          <div className="row">
            <h3>Products</h3>
            <div className="col-xs-12">
              <OrderDetailsTable lineItems={lineItems}/>
            </div>
          </div>
          { displayItems.length > 0 ?
            <div className="row">
              <h3>Displays</h3>
              <div className="col-xs-12">
                <OrderDisplayDetailsTable displayItems={displayItems}/>
              </div>
            </div> : '' }
          { testerCost > 0 ?
            <div className="row">
              <h3>Testers</h3>
              <div className="col-xs-12">
                <OrderTestersTable lineItems={lineItems}/>
              </div>
            </div> : '' }
          <div className="row">
            <div className="col-xs-12 wrapper totals">
              TOTAL PRODUCT COST: {formatCurrency(totalProduct, opts)}
            </div>
          </div>
          { shippingAndHandling > 0 ?
            <div className="row">
              <div className="col-xs-12 wrapper totals">
                TOTAL SHIPPING &amp; HANDLING: {formatCurrency(shippingAndHandling, opts)}
              </div>
            </div> : '' }
          { discount > 0 ?
            <div className="row">
              <div className="col-xs-12 wrapper totals">
                TOTAL DISCOUNT: {formatCurrency(discount, opts)}
              </div>
            </div> : '' }
          { order.payments ?
            order.payments.map((payment, index) =>
              <div className="row" key={index} >
                <div className="col-xs-12 wrapper totals">
                  PAID ({moment.unix(payment.date).format('MM/DD/YYYY')}): { formatCurrency(payment.amount, opts) }
                </div>
              </div>
            ) : '' }
          { total != totalProduct ?
            <div className="row">
              <div className="col-xs-12 wrapper totals">
                AMOUNT OWED: {formatCurrency(total, opts)}
              </div>
            </div> : '' }
          { order.notesToCustomer ?
            <div className="row">
              <div className="col-xs-12 col-md-6">
                NOTES: {order.notesToCustomer}
              </div>
            </div> : '' }
          { total > 0 ?
            <div className="row">
              <h2>Payment Information</h2>
              <div className="col-xs-12">
                <Markdown source={paymentInfo}/>
              </div>
            </div> : '' }
          <div className="row">
            <h2>Ordering Information</h2>
            <div className="col-xs-6 col-md-6">
              <Markdown source={terms1}/>
            </div>
            <div className="col-xs-6 col-md-6">
              <Markdown source={terms2}/>
            </div>
          </div>
        </LoadingPanel>
        <dialogs.DeleteDialog />
        <dialogs.UpdateDiscountDialog />
        <dialogs.UpdateShippingDialog />
      </div>
    );

  }
});
