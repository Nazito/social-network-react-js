import React from "react";
import { addMessageActionCreator } from "../../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WichAuchRedirect } from "../../../hok/auchRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    stateMesaages: state.messagesPage,
  };
};

let mapDispachToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  WichAuchRedirect
)(Dialogs);
