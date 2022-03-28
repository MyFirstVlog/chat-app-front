import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
  return (
    <Router>
      <div>{/* Por recomendación de react router es bueno mantener el div*/}
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={ChatPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
