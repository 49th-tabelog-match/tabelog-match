//SignUpResult.js
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../firebase/index'
import { makeStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'

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

const SignUpResult = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const classes = useStyles()

  useEffect(() => {
    setEmail(history.location.state.email)
    setPassword(history.location.state.password)
    setUserData(history.location.state)
  },[])

  async function authsubmit() {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err)
      })
    setUserData(nanoid())
    return userData
  }

  async function dbsubmit() {
    const setdata = await authsubmit()
    db.collection('users').add(setdata)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dbsubmit()
    history.push('/')
  }

  return (
    <>
      <h1 className={classes.h1}>確認画面</h1>
        <div>
          <h2 className={classes.h2}>ユーザー名</h2>
          <p className={classes.h2}>{history.location.state.username}</p>
        </div>
        <div>
          <h2 className={classes.h2}>E-mail</h2>
        <p className={classes.h2}>{history.location.state.email}</p>
        </div>
        <div>
          <h2 className={classes.h2}>Password</h2>
          <p className={classes.h2}>{history.location.state.password}</p>
        </div>
        <div>
          <h2 className={classes.h2}>生年月日</h2>
          <p className={classes.h2}>{history.location.state.birthday}</p>
        </div>
        <div>
          <h2 className={classes.h2}>性別</h2>
          <p className={classes.h2}>{history.location.state.gender}</p>
        </div>
      <button className={classes.button} onClick={handleSubmit}>合意して登録</button>
      {/* <button onClick={history.push('./signup')}>前のページに戻る</button> */}
      </>
  )


}

export default SignUpResult
