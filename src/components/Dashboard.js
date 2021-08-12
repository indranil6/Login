import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from "../redux/actions/userAction";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Dashboard = (props) => {
  const history = useHistory();
  const email = localStorage.getItem("userEmail");
  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link eventKey={2} onClick={logout} className="m-3">
                Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="dashboard">
        <h2 className="text-center">This is the Demo Dashboard Page</h2>
        <Row className="mx-3">
          <Col md={6}>
            <div className="w-100 m-3 p-3 rounded shadow bg-secondary bg-gradient text-light">
              <h2 className="text-center">User Profile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate consequuntur, iusto aliquid quidem reprehenderit
                molestiae, voluptas natus harum maxime delectus error! Repellat
                ullam omnis quos vitae eligendi maiores dolore quae odio ut!
                Dolores quia at autem impedit libero. Quas aliquid deleniti
                eligendi vel? Nihil quae, laudantium in consectetur iure
                doloribus.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="w-100 m-3  p-3 rounded shadow bg-secondary bg-gradient text-light">
              <h2 className="text-center">User Email</h2>
              <p className="fs-5 fw-bold text-center">{email}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                in facilis labore neque unde cum perferendis, libero quia velit
                ab nam voluptas eaque quod quae asperiores nemo blanditiis
                veniam. Non.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="m-3">
          <Col md={6}>
            <div className="w-100 m-3  p-3 rounded shadow bg-secondary bg-gradient text-light">
              <h2 className="text-center">User Activities</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate consequuntur, iusto aliquid quidem reprehenderit
                molestiae, voluptas natus harum maxime delectus error! Repellat
                ullam omnis quos vitae eligendi maiores dolore quae odio ut!
                Dolores quia at autem impedit libero. Quas aliquid deleniti
                eligendi vel? Nihil quae, laudantium in consectetur iure
                doloribus.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="w-100 m-3  p-3 rounded shadow bg-secondary bg-gradient text-light">
              <h2 className="text-center">Pending Tasks</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate consequuntur, iusto aliquid quidem reprehenderit
                molestiae, voluptas natus harum maxime delectus error! Repellat
                ullam omnis quos vitae eligendi maiores dolore quae odio ut!
                Dolores quia at autem impedit libero. Quas aliquid deleniti
                eligendi vel? Nihil quae, laudantium in consectetur iure
                doloribus.
              </p>
            </div>
          </Col>
        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
