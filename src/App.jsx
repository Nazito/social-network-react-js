import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar-components/Navbar";
import News from "./components/main-content-components/news-component/News";
import Music from "./components/main-content-components/music-component/Music";
import Settings from "./components/main-content-components/settings-component/Settings";
import { Route, withRouter } from "react-router-dom";
import FrendsContent from "./components/main-content-components/frends-content-component/FrendsContent";
//import DialogsContainer from "./components/main-content-components/dialogs-component/DialogsContainer";
import UsersContainer from "./components/main-content-components/users-component/UsersContainer";
//import ProfileContainer from "./components/main-content-components/profile-component/ProfileContainer";
import HeaderContainer from "./components/header-components/HeaderContainer";
import Login from "./components/main-content-components/login-component/Login";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import PreLoaderComponent from "./components/commons/preLoader/PreLoaderComponent";
import { lazy } from "react";
import { WichSuspense } from "./hok/wichSuspense";

const DialogsContainer = React.lazy(() =>
  import(
    "./components/main-content-components/dialogs-component/DialogsContainer"
  )
);
const ProfileContainer = React.lazy(() =>
  import(
    "./components/main-content-components/profile-component/ProfileContainer"
  )
);
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <PreLoaderComponent />;
    }

    return (
      <div className="App-wrapper">
        <HeaderContainer />

        <Navbar store={this.props.store} />
        <div className="App-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={WichSuspense(ProfileContainer)}
          />
          <Route
            exact
            path="/message"
            render={WichSuspense(DialogsContainer)}
          />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={() => <News />} />
          <Route path="/music" component={() => <Music />} />
          <Route path="/settings" component={() => <Settings />} />
          <Route path="/frends-content" component={() => <FrendsContent />} />
          <Route path="/login" component={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

const SamurayApp = (props) => {
  return (
    <BrowserRouter basename={procces.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </BrowserRouter>
  );
};

export default SamurayApp;
