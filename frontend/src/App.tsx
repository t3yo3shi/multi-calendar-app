import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CalendarHeader from "./components/CalendarHeader";
import DayOfWeekHead from "./components/DayOfWeekHead";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";
import { LoginForm } from "./components/LoginForm";
// import { ResetPasswordPage } from "./components/ResetPasswordPage";
import SignUpForm from "./components/SignUpForm";
import { Tab, Nav } from "react-bootstrap";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const App: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [authPage, setAuthPage] = useState("login");

    return (
        <Router>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="calendar row shadow">
                            <div className="d-flex flex-row calendar_base">
                                <div>
                                    <CalendarHeader date={date} setDate={setDate} />
                                    <DayOfWeekHead />
                                    <CalendarBody date={date} />
                                </div>
                                <div className="l_SidePanel col-3">
                                    <SidePanel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="auth-form p-3 bg-light rounded shadow">
                            <Tab.Container activeKey={authPage} onSelect={(k) => setAuthPage(k!)}>
                                <Nav variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="login">Login</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                    <Nav.Link eventKey="reset">Reset Password</Nav.Link>
                  </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="mt-3">
                                    <Tab.Pane eventKey="login">
                                        <LoginForm />
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey="reset">
                    <ResetPasswordPage />
                  </Tab.Pane> */}
                                    <Tab.Pane eventKey="signup">
                                        <SignUpForm />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
