import React, { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

  const {auth, verificarToken} = useContext(AuthContext);

  useEffect(() => {
    verificarToken();
  }, [])
  

  if(auth.checking){
    return <h1>
      Espere Por Favor
    </h1>
  }

  return (
    <Router>
      <div>{/* Por recomendación de react router es bueno mantener el div*/}
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <PublicRoute isAuthenticated={ auth.logged } path="/auth" component={ AuthRouter } />
          <PrivateRoute isAuthenticated={ auth.logged } exact path="/" component={ ChatPage } />

          <Redirect to="/" />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  )
}
