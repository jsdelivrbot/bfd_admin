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
    if (user && user.get('picture')) {
      return user.get('picture');
    }

    if (user && user.get('nickname')) {
      return `https://cdn.auth0.com/avatars/${user.get('nickname').slice(0, 2).toLowerCase()}.png`;
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
          <Link to="/report/month/5">
            May Report
          </Link>
        </li>
        <li role="presentation">
          <Link to="/report/commission/due">
            Commission Due Report
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
    const { user, issuer } = this.props;
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
                      {issuer}
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
