import React, { useEffect } from 'react'

import TechnologyInfo from '../../components/TechnologyInfo/TechnologyInfo'

import { setBodyBackgroundImage } from '../../utils/utils'

import styles from './TechnologyPage.module.css'
import mobileBgImg from '../../assets/images/technology/background-technology-mobile.jpg'
import tabletBgImg from '../../assets/images/technology/background-technology-tablet.jpg'
import desktopBgImg from '../../assets/images/technology/background-technology-desktop.jpg'

const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)

function TechnologyPage() {
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })

    return (
        <div className={styles.page ?? ''}>
            <div className="container">
                <h5 className="page-title heading-5 upcase">space launch 101</h5>
            </div>
            <div className="container-2">
                <TechnologyInfo />
            </div>
        </div >
    )
}

export default TechnologyPage