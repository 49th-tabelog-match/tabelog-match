//Login.js
import React, { useState } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Redirect, Link } from 'react-router-dom'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //とりあえずパスとメールだけで一旦作る
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/")
      })
      .catch(err => {
        console.log(err)
      })
    }


  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  // const user = useContext(AuthContext)
  // if (user) {
  //   return <Redirect to="/" />
  // }

  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            onChange={inputEmail}
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={inputPassword}
          />
        </div>
        {/* <button type='submit'>ログイン</button> */}
        <Link to="/signup">新規登録へ</Link>
      </form>
    </>
  )
}

export default Login
