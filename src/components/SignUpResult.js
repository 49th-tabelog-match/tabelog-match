//SignUpResult.js
import React, { useState, useContext, useHistory, useEffect } from 'react'
import firebase from '../config/firebase'
import SignUp from './SignUp'

const SignUpResult = (data) => {
  // const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setName(data.location.state.username)
    setEmail(data.location.state.email)
    setPassword(data.location.state.password)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const kakunin = (e) => {
    e.preventDefault()
    console.log(name, email, password)
  }

  return (
    <>
        <div>
          <label htmlFor="name">ユーザー名</label>
        <p>{data.location.state.username}</p>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
        <p>{data.location.state.email}</p>
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <p>{data.location.state.password}</p>
        </div>
      <button onClick={handleSubmit}>合意して登録</button>
      <button onClick={kakunin}>ステート確認用</button>

      {/* <button onClick={history.push('./signup')}>前のページに戻る</button> */}
      </>
  )


}

export default SignUpResult
