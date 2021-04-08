//SignUp.js
import React, { useState } from 'react'
import { firebaseConfig } from '../firebase/config'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import SignUpResult from './SignUpResult'
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

const SignUp = () => {
  const history = useHistory()
  const { register, handleSubmit, errors, getValues } = useForm()
  const [userData, setUserData] = useState()

  const classes = useStyles()

  const onSubmit = data => {
    // console.log(errors);
    history.push({ pathname: './signupresult', state: userData })
  }

  const onChange = () => {
        // e.preventDefault()
    setUserData(getValues())
  }

  const kakunin = (e) => {
        e.preventDefault()
    console.log(getValues())
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
      <h1 className={classes.h1}>新規会員登録</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.h2}>ユーザー名</h2>
        <input
          className={classes.form}
          type="text"
          placeholder="ユーザー名"
          name="usernaame"
          onChange={onChange}
          // registerを使うとTypeError: path.split is not a functionが出てしまうため一旦コメントアウトしているがregisterを使わないとgetValuesとかが動かないため全体が機能してない
          // ref={register({
          //   required: 'ユーザー名を記入してください'
          // })}
        />
        {/* {errors.username && <span className="error-message">{ errors.username.message }</span>} */}
          <h2 className={classes.h2}>メールアドレス</h2>
        <input
          className={classes.form}
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChange}
          // ref={register({
          //   required: 'メールアドレスを入力してください',
          //   pattern: {
          //     value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
          //     message: '正しいメールアドレスを入力してください'
          //   }
          // })}
        />
        {/* {errors.email && <span className="error-message">{ errors.email.message }</span>} */}
        <h2 className={classes.h2}>パスワード</h2>
        <input
          className={classes.form}
          type="text"
          placeholder="パスワード"
          name="password"
          onChange={onChange}
          // ref={register({
          //   required: 'パスワードを入力してください',
          //   pattern: {
          //     value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
          //     message:'パスワードは英字1文字以上、数字1文字以上を含む8文字以上の半角英数字を入力してください'
          //   }
          // })}
        />
        {/* {errors.password && <span className="error-message">{errors.password.message}</span>} */}


        <h2 className={classes.h2}>生年月日</h2>
        <input
          className={classes.form}
          type="text"
          placeholder="生年月日"
          name="birthday"
          onChange={onChange}
          // ref={register({
          //   required: '生年月日を入力してください',
          //   pattern: {
          //     value: /^[0-9]{8}$/,
          //     message:'半角数字8文字で入力してください'
          //   }
          // })}
        />
        {/* {errors.birthday && <span className="error-message">{errors.birthday.message}</span>} */}

        <h2 className={classes.h2}>性別</h2>
        <select
          className={classes.form}
          type="text"
          name="gender"
          onChange={onChange}>
          <option value='na'>無回答</option>
          <option value='male'>男性</option>
          <option value='female'>女性</option>
          <option value='other'>その他</option>
        </select>
        <div>
          <button className={classes.button} onClick={ kakunin }>配列確認</button>
        </div>
        <div>
          <button className={classes.button} type="submit">確認画面へ</button>
        </div>
        <div>
          <Link className={classes.link} to="/login">ログインへ</Link>
        </div>
      </form>
      </>
  )
}


export default SignUp
