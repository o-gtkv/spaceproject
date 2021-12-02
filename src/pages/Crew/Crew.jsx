import React, { useEffect } from 'react'

import { setBodyBackgroundImage } from '../../utils/utils'

// import styles from './CrewPage.module.css'
import mobileBgImg from '../../assets/images/crew/background-crew-mobile.jpg'
import tabletBgImg from '../../assets/images/crew/background-crew-tablet.jpg'
import desktopBgImg from '../../assets/images/crew/background-crew-desktop.jpg'

const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)

function CrewPage() {
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })

    return (
        <div>
            <h1 style={{color: "red"}}>Crew</h1>
        </div>
    )
}

export default CrewPage