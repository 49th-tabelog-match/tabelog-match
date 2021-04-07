import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../AuthProvider';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    'button': {
        textAlign: 'right',
        width: '200px'
    }
}))
const Main = () => {
    const classes = useStyles();
    const history = useHistory();
    console.log(history)

    const { authUser, setAuthUser } = useContext(AuthContext)
    console.log(authUser)

    return (
        <>
            <div className='main-container' >
                <button onClick={() => setAuthUser(!authUser)} >auth control</button>
                <div className='main-image'>
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className='main-title-and-button-wrap' >
                    <h2 className='main-title' >いきてぇお店を探そう</h2>
                    <div>
                        <Button
                            className={classes.button}
                            variant='contained'
                            color='primary'
                            startIcon={<SearchIcon />}
                            onClick={() => history.push('/search')}
                        >お店を検索
                     </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;