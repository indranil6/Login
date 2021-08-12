import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    let bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);

    props.userAction.login(bodyFormData, (data) => {
      console.log(data);
      if (data.status_code === 200) {
        localStorage.setItem("token", data.data.token);
        if (localStorage.getItem("token")) {
          alert(data.message);
          history.push(`/dashboard`);
          localStorage.setItem("userEmail", email);
          window.location.reload();
        }
      } else {
        alert(data.message);
      }
    });
  };
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };
  return (
    <div>
      <div className="center">
        <div className="form w-100" id="form1">
          <h2>Log In Here</h2>
          <Form onSubmit={login} className="email">
            <Form.Group size="lg" controlId="email">
              <Form.Control
                style={{
                  marginBottom: "30px",
                }}
                autoFocus
                placeholder="Enter Your Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Control
                style={{
                  marginBottom: "30px",
                }}
                placeholder="Enter Your Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                disabled={!validateForm()}
                onClick={login}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
