import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'
import PublicRoute from './routes/PublicRoute'
import SignUp from './pages/SignUp'
import Search from './components/Search'

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
          <SignUp />
        </Route>

        <Route path="/search/:keys" component={Search} />

        <Route component={Home} />
      </Switch>
    </Layout>
  )
}
export default App
