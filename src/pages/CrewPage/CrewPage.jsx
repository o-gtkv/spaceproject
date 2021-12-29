import React, { useEffect } from 'react'

import CrewInfo from '../../components/CrewInfo/CrewInfo'
import { setBodyBackgroundImage } from '../../utils/utils'

import styles from './CrewPage.module.css'
import mobileBgImg from '../../assets/images/crew/background-crew-mobile.jpg'
import tabletBgImg from '../../assets/images/crew/background-crew-tablet.jpg'
import desktopBgImg from '../../assets/images/crew/background-crew-desktop.jpg'

const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)

function CrewPage() {
    // TODO replace resize to useMedia hook
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })

    return (
        <div className="container">
            <div className={styles.page ?? ''}>
                <h5 className="page-title heading-5 upcase">meet your crew</h5>
                <CrewInfo />
            </div>
        </div>
    )
}

export default CrewPage