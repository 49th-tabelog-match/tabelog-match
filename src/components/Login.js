//Login.js
import React, { useState } from 'react'
// import { firebaseConfig } from '../firebase/config'
import { auth } from '../firebase/index'
// import { AuthProvider } from
import { Redirect, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
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

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register, handleSubmit, errors, getValues } = useForm()

  const classes = useStyles()

  //とりあえずパスとメールだけで一旦作る
  const onSubmit = (e) => {
    // e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
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
      <h1 className={classes.h1}>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className={classes.h2}>E-mail</h2>
          <input
            className={classes.form}
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            onChange={inputEmail}
            />
        </div>
        <div>
          <h2 className={classes.h2}>Password</h2>
          <input
            className={classes.form}
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={inputPassword}
          />
        </div>
        <button className={classes.button} type='submit'>ログインする</button>
        <Link className={classes.link} to="/signup">新規登録へ</Link>
      </form>
    </>
  )
}

export default Login
