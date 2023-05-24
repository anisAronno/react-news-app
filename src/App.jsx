import { Route, Switch } from 'wouter'
import Layout from './assets/components/Layout'
import Home from './assets/pages/Home'
import Login from './assets/components/Login'
import SignUp from './assets/components/SignUp'
import PublicRoute from './assets/routes/PublicRoute'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <PublicRoute>
            <Login />
          </PublicRoute>
        </Route>

        <Route path="/signup">
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        </Route>

        <Route component={Home} />
      </Switch>
    </Layout>
  )
}
export default App
