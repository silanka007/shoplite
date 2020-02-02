import React from 'react';

import './home-page.style.scss';

const HomePage = () => (
    <main className="homepage">
        <div className="directory-menu">
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">hats</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">jackets</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">sneakers</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">womens</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="content">
                    <h1 className="title">mens</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
        </div>
    </main>
)

export default HomePage;