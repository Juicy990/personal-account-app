import React from "react";
import "./App.css";
import { LogInBlock } from "./components/authorization/loginBlock/LogInBlock";
import { UserContainer } from "./components/user/userContainer/UserContainer";
import { AccountInfo } from "./components/authorization/accountInfo/AccountInfo";

function App() {
  return (
    <div className="wrapper">
      <LogInBlock />
      <AccountInfo />
      <UserContainer />
    </div>
  );
}

export default App;
