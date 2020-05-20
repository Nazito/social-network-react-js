import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "../../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { WichAuchRedirect } from "../../../hok/auchRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authoriedUserId;
      if (!userId) {
        this.props.history.push("login");
      }
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authoriedUserId: state.authReducer.id,
  isAuch: state.authReducer.isAuch,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  WichAuchRedirect
)(ProfileContainer);
