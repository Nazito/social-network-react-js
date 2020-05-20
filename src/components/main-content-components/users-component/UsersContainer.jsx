import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  unfollow,
  follow,
  setCurrenPage,
  toggleFollowingProgres,
  requestUsers,
} from "../../../redux/users-reducer";
import PreLoaderComponent from "../../commons/preLoader/PreLoaderComponent";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFeching,
  getFollowingInProgress,
} from "../../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChenged = (pageNumber) => {
    const { getUsers, pageSize, setCurrenPage } = this.props;
    getUsers(pageNumber, pageSize);
    setCurrenPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFeching ? <PreLoaderComponent /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          onPageChenged={this.onPageChenged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
/* 
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeching: state.usersPage.isFeching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

*/

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeching: getIsFeching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrenPage,
    toggleFollowingProgres,
    getUsers: requestUsers,
  })
)(UsersContainer);
