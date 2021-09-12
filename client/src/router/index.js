import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../components/Home"
import NotPage from "../components/NotPage"
import Relatorio from "../components/Relatorio"
import SignIn from "../components/SignIn"
import Signup from "../components/Signup"

import { useAuth } from '../context/auth';

export default function Router() {

  const { isLoggedIn, init } = useAuth();

  if (init) {
    return (
      <div>
        Carregando..
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Relatorio" component={Relatorio} />
        <Route path="*" component={NotPage} />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={Signup} />
      </Switch>
    )
  }


}
