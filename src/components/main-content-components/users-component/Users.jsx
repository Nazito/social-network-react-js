import React from "react";
import classes from "./Users.module.css";
import Paginator from "../../commons/paginator/Paginator";
import User from "./User";

const Users = ({
  onPageChenged,
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChenged={onPageChenged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />

      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
