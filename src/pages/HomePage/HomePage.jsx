import React from 'react'
import { Link } from 'react-router-dom'
import { useBodyBackground } from '../../hooks'

import styles from './HomePage.module.scss'
import mobileBgImg from '../../assets/images/home/background-home-mobile.jpg'
import tabletBgImg from '../../assets/images/home/background-home-tablet.jpg'
import desktopBgImg from '../../assets/images/home/background-home-desktop.jpg'
import { Zoom, Fade } from 'react-reveal'

const duration = 1500

function HomePage() {
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.content}>
                    <div className={styles.infoBlock}>
                        <Fade duration={duration} top>
                            <h5 className="heading-5 upcase">so, you want to travel to</h5>
                        </Fade>
                        <Fade delay={duration / 3} duration={duration} bottom>
                            <h1 className="heading-1 upcase">space</h1>
                        </Fade>
                        <Zoom delay={duration / 2} duration={duration} left cascade>
                            <p className="regular-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </Zoom>
                    </div>
                    <Zoom duration={duration} >
                        <div className={styles.exploreButtonBlock}>
                            <Link to="/destination" className={`${styles.exploreButton} upcase`}>explore</Link>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div >
    )
}

export default HomePage
