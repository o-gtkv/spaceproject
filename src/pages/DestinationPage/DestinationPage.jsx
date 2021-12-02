import React, { useEffect } from 'react'

import { setBodyBackgroundImage } from '../../utils/utils'

// import styles from './DestinationPage.module.css'
import mobileBgImg from '../../assets/images/destination/background-destination-mobile.jpg'
import tabletBgImg from '../../assets/images/destination/background-destination-tablet.jpg'
import desktopBgImg from '../../assets/images/destination/background-destination-desktop.jpg'

const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)

function DestinationPage() {
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })

    return (
        <h5 className="heading-5 upcase"> pick your distanation</h5>    
    )
}

export default DestinationPage
