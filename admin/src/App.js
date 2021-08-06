import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DefaultLayout from "./views/layouts/DefaultLayout";
import LoginPage from "./views/pages/LoginPage";
import PrivateRoute from "./views/shared_components/PrivateRoute";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/page404">Page not found</Route>
        <PrivateRoute path="/">
          <DefaultLayout />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App;