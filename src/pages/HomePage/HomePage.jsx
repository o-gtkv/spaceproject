import React from 'react'
import { Link } from 'react-router-dom'
import { useBodyBackground } from '../../hooks'

import styles from './HomePage.module.scss'
import mobileBgImg from '../../assets/images/home/background-home-mobile.jpg'
import tabletBgImg from '../../assets/images/home/background-home-tablet.jpg'
import desktopBgImg from '../../assets/images/home/background-home-desktop.jpg'

function HomePage() {
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.content}>
                    <div className={styles.infoBlock}>
                        <h5 className="heading-5 upcase">so, you want to travel to</h5>
                        <h1 className="heading-1 upcase">space</h1>
                        <p className="regular-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className={styles.exploreButtonBlock}>
                        <Link to="/destination" className={`${styles.exploreButton} upcase`}>explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
