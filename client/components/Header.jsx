import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header extends Component {
  static propTypes = {
    user: React.PropTypes.object,
    accessLevel: React.PropTypes.object,
    issuer: React.PropTypes.string,
    onLogout: React.PropTypes.func.isRequired
  };

  getPicture(iss, user) {
    if (user && user.picture) {
      return user.picture;
    }

    if (user && user.nickname) {
      return `https://cdn.auth0.com/avatars/${user.nickname.slice(0, 2).toLowerCase()}.png`;
    }

    return `https://cdn.auth0.com/avatars/${iss.slice(0, 2).toLowerCase()}.png`;
  }

  getMenu() {
    return (
      <ul role="menu" className="dropdown-menu">
        <li role="presentation">
          <Link to="/orders">
            Order Management
          </Link>
        </li>
        <li role="presentation">
          <Link to="/manageShowAndSalesRep">
            Manage Show and Sales Rep
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/payments">
            Payments Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/shipments">
            Shipments Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/show">
            Show Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/month/0">
            Next 30 Days Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/commission/due/max">
            Commission Due Max Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/commission/due/jes">
            Commission Due Jes Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/authorizeCrm">
            Authorize HubSpot
          </Link>
        </li>
        <li role="presentation">
          <a href="#" role="menuitem" tabIndex="-1" onClick={this.props.onLogout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  render() {
    const { issuer } = this.props;
    const user = this.props.user && this.props.user.toJS() || {};

    return (
      <header className="dashboard-header">
        <nav role="navigation" className="navbar navbar-default">
          <div className="container">
            <div id="header" className="navbar-header" style={{ width: '800px' }}>
              <a className="navbar-brand" href="#">{window.config.TITLE}</a>
            </div>
            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <span role="button" data-toggle="dropdown" data-target="#" className="btn-dro btn-username">
                    <img role="presentation" src={this.getPicture(issuer, user)} className="picture avatar" />
                    <span className="username-text">
                      {user.name || user.email}
                    </span>
                    <i className="icon-budicon-460"></i>
                  </span>
                  {this.getMenu()}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
