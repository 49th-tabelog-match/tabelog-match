import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function SearchResult() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box width="75%">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <h2>ロゴ</h2>
          <h1>誰でもいいから一緒にこの店行ってほしい</h1>
          <div>
            <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              マイメニュー
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>ユーザーページ</MenuItem>
              <MenuItem onClick={handleClose}>検索ページ</MenuItem>
              <MenuItem onClick={handleClose}>チャット一覧</MenuItem>
              <MenuItem onClick={handleClose}>お知らせ</MenuItem>
              <MenuItem onClick={handleClose}>このサービスの使い方</MenuItem>
              <MenuItem onClick={handleClose}>よくある質問</MenuItem>
              <MenuItem onClick={handleClose}>ログアウト</MenuItem>
              <MenuItem onClick={handleClose}>利用規約</MenuItem>
              <MenuItem onClick={handleClose}>ポリシー</MenuItem>
              <MenuItem onClick={handleClose}>ログイン</MenuItem>
            </Menu>
          </div>
        </Grid>
        <h2>いきてぇお店を探そう</h2>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Button variant="contained" >詳しい条件で探す</Button>
        </Grid>
        <h2>いきてぇお店ランキング</h2>
      </Box>
  )
}