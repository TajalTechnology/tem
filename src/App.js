import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ChatroomPage from "./pages/ChatroomPage"

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={IndexPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/dashboard" component={DashboardPage} exact />
      <Route path="/chatroom/:id" component={ChatroomPage} exact />
    </Switch>
  </BrowserRouter>;
}

export default App;
