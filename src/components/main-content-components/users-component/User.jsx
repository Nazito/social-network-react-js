import React from "react";
import noPhotoUser from "../../../assets/img/computer-icons-user-profile-clip-art-png-favpng-MtANWqcpdGATjaV7qwJpkYcdq.jpg";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : noPhotoUser}
              alt="no photo"
              className={classes.usersImg}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              UN-Follow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.cuntry"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
