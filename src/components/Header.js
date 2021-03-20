import React, { useState } from 'react';
import logo from '../img/tabelog.png'
import { Squash as Hamburger } from 'hamburger-react'



const Header = () => {
    // ハンバガーメニューをクリックした時にメニューの表示を切り替えるステート
    const [openMenu, setOpenMenu] = useState(false)

    // openMenuがtrueかfalseか入っている文字列を変えている(動的に変化するクラス名として使う)
    const openOrClose = openMenu ? `nav-menu nav-menu-in` : 'nav-menu';

    // ハンバーガーメニューが三本線か✖️印になるかを真偽値によって変化させるステート
    const [isOpen, setOpen] = useState(false)

    // openMenuがtrueならmodalという文字列、falseなら空文字が入る(動的に変わるクラス名)
    const modal = openMenu ? 'modal' : '';

    return (
        <>
            <header className='header'>
                <div className='header-flex'>
                    <div className='header-flex-logo'>
                        <img className="header-logo" src={logo} alt="" />
                        <h2 className='header-h2'>誰でもいいから一緒にこのお店に行って欲しい</h2>
                    </div>

                    <Hamburger
                        size={20}
                        toggled={isOpen}
                        toggle={setOpen}
                        color={openMenu ? 'white' : 'black'}
                        onToggle={toggled => {
                            if (toggled) {
                                setOpenMenu(true)
                            } else {
                                setOpenMenu(false);
                            }
                        }} />

                    <nav id="nav-menu" className={openOrClose} onClick={() => {
                        setOpenMenu(false)
                        setOpen(false)
                    }}>
                        <ul>
                            <li><span className="under-line">ユーザーページ</span></li>
                            <li><span className="under-line">検索ページ</span></li>
                            <li><span className="under-line">チャット一覧</span></li>
                            <li><span className="under-line">お知らせ</span></li>
                            <li><span className="under-line">このサービスの使い方</span></li>
                            <li><span className="under-line">よくある質問</span></li>
                            <li><span className="under-line">ログアウト</span></li>
                            <li><span className="under-line">利用規約</span></li>
                            <li><span className="under-line">ポリシー</span></li>
                        </ul>
                    </nav>

                </div>
                <div className={modal} onClick={() => {
                    setOpenMenu(false)
                    setOpen(false)
                }}>
                </div>

            </header>
            <div style={{ paddingTop: '108px' }} ></div>
        </>
    )
}

export default Header;