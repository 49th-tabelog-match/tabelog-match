//SignUpResult.js
import React, { useState, useContext, useHistory, useEffect } from 'react'
import { firebaseConfig } from '../firebase/config'
import SignUp from './SignUp'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  h1: {
    fontSize: '36px',
    fontWeight: 'bold',
    paddingLeft: '85px',
    paddingBottom: '56px',
    paddingTop: '178px'
  },
  h2: {
    fontSize: '16px',
    paddingBottom: '10px',
    paddingLeft: '85px'
  },
  form: {
    marginBottom: '35px',
    marginLeft: '85px',
    width: '600px',
    height: '42px'
  },
  button: {
    marginLeft: '85px',
    width: '440px',
    height: '76px',
    backgroundColor: '#686868',
    color: '#E4E4E4',
    fontSize: '36px',
    boxShadow: '0'
  },
  link: {
    paddingTop: '20px',
    marginLeft: '85px',
    textAlign: 'center'
  }

})

const SignUpResult = (data) => {
  // const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  useEffect(() => {
    setName(data.location.state.username)
    setEmail(data.location.state.email)
    setPassword(data.location.state.password)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
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
      <h1 className={classes.h1}>確認画面</h1>
        <div>
          <h2 className={classes.h2}>ユーザー名</h2>
        <p className={classes.h2}>{data.location.state.username}</p>
        </div>
        <div>
          <h2 className={classes.h2}>E-mail</h2>
        <p className={classes.h2}>{data.location.state.email}</p>
        </div>
        <div>
        <h2 className={classes.h2}>Password</h2>
        <p className={classes.h2}>{data.location.state.password}</p>
        </div>
      <button className={classes.button} onClick={handleSubmit}>合意して登録</button>
      <button className={classes.button} onClick={kakunin}>ステート確認用</button>

      {/* <button onClick={history.push('./signup')}>前のページに戻る</button> */}
      </>
  )


}

export default SignUpResult
