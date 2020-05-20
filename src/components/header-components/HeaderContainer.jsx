import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auch-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuch: state.authReducer.isAuch,
  login: state.authReducer.login,
});
export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
