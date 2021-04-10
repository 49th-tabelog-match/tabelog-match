import React from 'react'
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router';
import {db} from '../firebase/index';

const SearchResult = () => {
    const location = useLocation();                    //location使用
    const state = location.state.shopresult;           //検索結果受け取り
    const [results, setResults] = React.useState([]);
    React.useEffect(() => {
        axios.get(state, {
            'adapter': jsonpAdapter,
        }).then(res => {
            console.log(res.data.results.shop);
            setResults(res.data.results.shop);   //検索結果をstateに収納
        }).catch(error => {
            console.log(error);
        });
    }, [])

    const history = useHistory();   //history使用
    
    const shopresults = results.map((result, index) => {  //検索結果を加工しそれぞれ表示
        const result_id = result.id;
        const handleClick = () => {
            history.push({
                pathname: `/restaurant/:${result_id}`
            })
        }
        db.collection('rest').doc(`${result_id}`).set({  //firestoreに検索結果のIDを収納
            id: result_id
        });
        return (
            <div style={{ display: 'flex', backgroundColor: '#c0c0c0', marginBottom: '20px' }} key={index} onClick={handleClick}>
                <div>
                    <img src={result.photo.pc.m} alt="" />
                </div>
                <div>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>{result.name}</h1>
                    <div>
                        <h2>住所：{result.address}</h2>
                        <h2>平均予算：{result.budget.average}</h2>
                    </div>
                    <p>{result.catch}</p>
                    <Button variant='contained' type='submit' style={{ fontSize: '16px', backgroundColor: '#222222', color: 'white', width: '25%' }}>選択</Button>
                </div>
            </div>
        )
    });

    return (
        <div className='container'>
            <h2 className='header-h2' style={{ fontSize: '25px', marginBottom: '10px' }}>いきてぇお店ランキング</h2>
            <p style={{ marginBottom: '40px' }}>多くの人がいきてぇをしたお店のランキングです</p>
            <div>
                {shopresults}
            </div>
        </div>
    )
}

export default SearchResult;