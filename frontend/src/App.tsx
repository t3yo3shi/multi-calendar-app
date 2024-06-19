import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import DayOfWeekHead from "./components/DayOfWeekHead";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";
import { LoginForm } from "./components/LoginForm"; // パスを修正
import { ResetPasswordPage } from "./components/ResetPasswordPage"; // パスを修正
import SignUpForm from "./components/SignUpForm"; // パスを修正

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [authPage, setAuthPage] = useState("login");

  const renderAuthPage = () => {
    switch (authPage) {
      case "login":
        return <LoginForm />;
      case "reset":
        return <ResetPasswordPage />;
      case "signup":
        return <SignUpForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div className="container text-center">
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
      <div className="auth-nav">
        <button onClick={() => setAuthPage("login")}>ログイン</button>
        <button onClick={() => setAuthPage("reset")}>パスワードリセット</button>
        <button onClick={() => setAuthPage("signup")}>サインアップ</button>
      </div>
      <div className="auth-form">{renderAuthPage()}</div>
    </div>
  );
};

export default App;
