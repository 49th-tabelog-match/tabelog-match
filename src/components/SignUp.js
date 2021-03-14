//SignUp.js
import React, { useState } from 'react'
import firebase from '../config/firebase'
import { useHistory, Link } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form';
import SignUpResult from './SignUpResult'

const SignUp = () => {
  const history = useHistory()
  const { register, handleSubmit, errors, watch, reset, getValues } = useForm()
  const [userData, setUserData] = useState()

  const onSubmit = data => {
    // console.log(errors);
    history.push({ pathname: './signupresult', state: userData })
  }

  const onChange = () => {
    setUserData(getValues)
  }


//必要そうな登録内容
  //★とりあえず実装するやつ
  //ユーザー名（あとから変更可能）
  //email（あとから変更可能）
  //password（あとから変更可能）

  //★あとから実装するやつ
  //性別
  //住んでるエリア（あとから変更可能）
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">ユーザー名</label>
          <input type="text" placeholder="ユーザー名" name="username" onChange={onChange} ref={register} />
          <label htmlFor="email">メールアドレス</label>
          <input type="text" placeholder="Email" name="email" onChange={onChange} ref={register} />
          <label htmlFor="password">パスワード</label>
          <input type="text" placeholder="パスワード" name="password" onChange={onChange} ref={register} />
        <button type="submit">確認画面へ</button>
        <Link to="/login">ログインへ</Link>
      </form>
      </>
  )
}


export default SignUp
