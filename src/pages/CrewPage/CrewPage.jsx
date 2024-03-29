import React from 'react'
import { useLocation } from 'react-router-dom'
import CrewInfo from '../../components/CrewInfo/CrewInfo'
import { useBodyBackground } from '../../hooks'
import PageTitle from '../shared/PageTitle/PageTitle'

import styles from './CrewPage.module.scss'
import mobileBgImg from '../../assets/images/crew/background-crew-mobile.jpg'
import tabletBgImg from '../../assets/images/crew/background-crew-tablet.jpg'
import desktopBgImg from '../../assets/images/crew/background-crew-desktop.jpg'

function CrewPage() {
    const pageNumber = useLocation().state
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    return (
        <div className="container">
            <div className={styles.page ?? ''}>
                <PageTitle text="meet your crew" pageNumber={pageNumber} />
                <CrewInfo />
            </div>
        </div>
    )
}

export default CrewPage