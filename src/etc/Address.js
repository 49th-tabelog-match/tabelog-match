import React from 'react';

const Address = ({ address, setAddress }) => {

  const handleChangeAddress = (e) => {      // 選択したジャンルを収納
    const uri = encodeURI(e.target.value);
    setAddress(e.target.value);
  }

  return (
    <div>
      <label>
        探したい店の住所を入力（アバウトでＯＫ）<br />
        <input type='text' value={address} onChange={handleChangeAddress}/>
      </label>
    </div>
  );
};

export default Address;