import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = state => ({
  isAuch: state.authReducer.isAuch
});

export const WichAuchRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuch) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuchRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuchRedirectComponent;
};
