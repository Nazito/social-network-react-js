import React from "react";
import classes from "./ProfileInfo.module.css";
import PreLoaderComponent from "../../../../commons/preLoader/PreLoaderComponent";
import noneUserImg from "../../../../../assets/img/computer-icons-user-profile-clip-art-png-favpng-MtANWqcpdGATjaV7qwJpkYcdq.jpg";
import ProfileStatus from "../profile-status-component/ProfileStatus";
import ProfileStatusWichHooks from "../profile-status-component/ProfileStatusWichHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <PreLoaderComponent />;
  }

  return (
    <div>
      <div>
        <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
      </div>

      <div>
        <img src={profile.photos.large ? profile.photos.large : noneUserImg} />
        <ProfileStatusWichHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
