import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'
import PublicRoute from './routes/PublicRoute'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <PublicRoute>
            <Login />
          </PublicRoute>
        </Route>

        <Route path="/signup">~
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
