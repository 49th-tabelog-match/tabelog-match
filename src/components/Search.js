import React from 'react';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

export default function Search() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    }
  }));
  const classes = useStyles();
  const [prefecture, setPrefecture] = React.useState('');
  const [city, setCity] = React.useState('');
  const [detail, setDetail] = React.useState('');

  const handleChangePrefecture = (event) => {
    setPrefecture(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  return (
    <Box width="75%">
      <h2>いきてぇお店を探そう</h2>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="prefecture-select-label">プルダウンで都道府県を選択</InputLabel>
          <Select
            labelId="prefecture-select-label"
            id="prefecture-select"
            value={prefecture}
            onChange={handleChangePrefecture}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="city-select-label">プルダウンで市区町村を選択</InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={city}
            onChange={handleChangeCity}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="detail-select-label">プルダウンで細かいエリアを選択</InputLabel>
          <Select
            labelId="detail-select-label"
            id="detail-select"
            value={detail}
            onChange={handleChangeDetail}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}