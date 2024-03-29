import React from 'react'
import { useLocation } from 'react-router-dom'
import TechnologyInfo from '../../components/TechnologyInfo/TechnologyInfo'
import { useBodyBackground } from '../../hooks'
import PageTitle from '../shared/PageTitle/PageTitle'

import styles from './TechnologyPage.module.scss'
import mobileBgImg from '../../assets/images/technology/background-technology-mobile.jpg'
import tabletBgImg from '../../assets/images/technology/background-technology-tablet.jpg'
import desktopBgImg from '../../assets/images/technology/background-technology-desktop.jpg'

function TechnologyPage() {
    const pageNumber = useLocation().state
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    return (
        <div className={styles.page ?? ''}>
            <div className="container">
                <PageTitle text="space launch 101" pageNumber={pageNumber} />
            </div>
            <TechnologyInfo />
        </div >
    )
}

export default TechnologyPage