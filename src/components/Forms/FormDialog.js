import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextInput from './TextInput';
import { DialogContentText } from '@material-ui/core';

const FormDialog = ({ open, handleClose, setSelfIntroduction }) => {
    // プロフィールを編集の自己紹介のフォームの値を管理
    const [description, setDescription] = useState('');

    // プロフィールを編集の名前のフォームの値を管理
    const [name, setName] = useState('');

    // 状況によってプロフィールの変更ボタンを使用できるかを制御
    const disabled = name.replace(/\s+/g, "") === '' || description.length > 240 || name.length > 20;

    // 名前フォームに入力した値をnameステートに代入
    const inputName = (e) => {
        setName(e.target.value)
    }

    // 自己紹介フォームに入力した値をdescriptionステートに代入
    const inputDescription = (e) => {
        setDescription(e.target.value)
    }

    // 変更ボタンをクリックした時にアラートを出し、OKならselfIntroductionの値を更新
    // selfIntroductionは実際に自己紹介を画面上に表示するためのステート
    const submitForm = () => {
        const result = window.confirm('変更内容を保存しますか？')

        if (result) {
            setSelfIntroduction(description)
            handleClose();
        }
    }



    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">プロフィールを編集</DialogTitle>

            <DialogContent>
                <TextInput
                    label={'名前(必須)'} multiline={false} rows={1}
                    value={name} type={'text'} onChange={inputName}
                />

                <TextInput
                    label={'自己紹介'} multiline={true} rows={5}
                    value={description} type={'text'} onChange={inputDescription}
                />

                <DialogContentText style={{ color: 'red', fontSize: '12px' }} id="alert-dialog-description">
                    {description.length >= 240 && '240文字以内で入力してください'}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary" >
                    キャンセル
                </Button>

                <Button onClick={submitForm} color="primary" autoFocus disabled={disabled}>
                    変更
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default FormDialog;