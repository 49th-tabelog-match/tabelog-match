import React from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const API_ENDPOINT = 'https://webservice.recruit.co.jp/hotpepper/genre/v1/?key=17f7928912557ff8&format=jsonp';


const Genre = ({ genres, setGenres, selectGenre, setSelectGenre }) => {
  window.callback = json => console.log(json);

  const handleChangeGenre = (e) => {      // 選択したジャンルを収納
    setSelectGenre(e.target.value);
  }

  const options = genres.map((genre, index) => (   // ジャンルリストを取り出しoptionタグに反映
    <option key={index} value={genre.code}>
      {genre.name}
    </option>
  ));

  React.useEffect(() => {
    axios.get(API_ENDPOINT, {     // ジャンルマスタAPI取得
      'adapter': jsonpAdapter,
    }).then(res => {
      res.data.results.genre.unshift({code: null, name: '選択してください'})
      console.log(res.data.results.genre)
      setGenres(res.data.results.genre)      // 取得したジャンルリストを扱うためにstateに収納
    }).catch(error => {
      console.log(error);
    });
  }, [])


  return (
    <div>
      <label>
        プルダウンでジャンルを選択<br />
        <select value={selectGenre} onChange={handleChangeGenre}>
          {options}
        </select>
      </label>
    </div>
  );
};

export default Genre;