import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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

    const pageNumber = useLocation().state

    return (
        <div className={styles.page ?? ''}>
            <div className="container">
                <h5 className="page-title heading-5 upcase" datapagenumber={pageNumber}>space launch 101</h5>
            </div>
            <TechnologyInfo />
        </div >
    )
}

export default TechnologyPage