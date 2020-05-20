import React from "react";
import classes from "./Login.module.css";
import classesError from "../../commons/formControls/formsControl.module.css";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../../commons/formControls/formsControl";
import {
  requiredField,
  maxLengthCreatore,
} from "../../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../../redux/auch-reducer";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLengthCreatore(20);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      Field
      {createField("Email", "email", [requiredField, maxLength20], Input)}
      {createField("Password", "pass", [requiredField, maxLength20], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}
      {error && <div className={classesError.formSummaryError}>{error}</div>}
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.pass, formData.rememberMe);
  };

  if (props.isAuch) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuch: state.authReducer.isAuch,
});

export default connect(mapStateToProps, { login })(Login);
