import React from 'react';
import Genre from "../etc/Genre";
// import Prefecture from './Prefecture';
// import City from './City';
import Address from '../etc/Address';


export default function Search({history}) {
  const [genres, setGenres] = React.useState([]);
  const [selectGenre, setSelectGenre] = React.useState('');
  // const [prefectures, setPrefectures] = React.useState([]);
  // const [selectPrefecture, setSelectPrefecture] = React.useState('');
  // const [cities, setCities] = React.useState([]);
  // const [selectCity, setSelectCity] = React.useState('');
  const [address, setAddress] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/searchresult')
  }

  return (
    <>
      <h2>いきてぇお店を探そう</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Genre genres={genres} setGenres={setGenres} selectGenre={selectGenre} setSelectGenre={setSelectGenre} />
          {/* <Prefecture prefectures={prefectures} setPrefectures={setPrefectures} selectPrefecture={selectPrefecture} setSelectPrefecture={setSelectPrefecture} />
          <City cities={cities} setCities={setCities} selectCity={selectCity} setSelectCity={setSelectCity} selectPrefecture={selectPrefecture} /> */}
          <Address address={address} setAddress={setAddress} />
          <button type="submit">検索</button>
        </form>
      </div>
    </>
  );
}