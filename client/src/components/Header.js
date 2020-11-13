import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import googleImage from '../images/btn_google_signin_light_normal_web.png';
import googleFocus from '../images/btn_google_signin_light_focus_web.png';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
          <li style={{marginTop:"0.5em", padding:"0"}}>
            <a href="/auth/google"  
            style={{ padding:"0", display: "inline"}} >
            <img
            onMouseOver={e => (e.currentTarget.src=googleFocus)}
            onMouseOut={e => (e.currentTarget.src=googleImage)}
            src={googleImage} 
            
            alt="login with google"/>
            </a>
          </li>
          <li>
          </li>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    return (
      <nav>
        <div
          className="nav-wrapper"
          style={{ marginLeft: "2.5em", marginRight: "2.5em" }}
        >
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ fontWeight:"500"}}
          >
            Mail Out
            <i className="material-icons right" style={{ marginLeft:"0.25em"}}>mail</i>
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
