import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Reset } from 'styled-reset'

import Login from './components/Login'
import SignUp from './components/SignUp'
import SignUpResult from './components/SearchResult'
import Main from './components/Main'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import Restaurant from './components/Restaurant'
import UserInfo from './components/UserInfo'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signupresult' component={SignUpResult} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/searchresult' component={SearchResult} />
          <Route exact path='/restaurant' component={Restaurant} />
          <Route exact path='/userinfo' component={UserInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
