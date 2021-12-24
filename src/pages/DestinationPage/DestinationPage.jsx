import React, { useEffect, useState } from 'react'

import TabBar from '../../components/TabBar/TabBar'
import Tab from '../../components/Tab/Tab'
import TabContent from '../../components/TabContent/TabContent'
import TabContext from '../../components/TabContext/TabContext'
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo'

import { setBodyBackgroundImage } from '../../utils/utils'

import styles from './DestinationPage.module.css'
import mobileBgImg from '../../assets/images/destination/background-destination-mobile.jpg'
import tabletBgImg from '../../assets/images/destination/background-destination-tablet.jpg'
import desktopBgImg from '../../assets/images/destination/background-destination-desktop.jpg'

import { destination } from '../../data/destination'

const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)

function DestinationPage() {
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })

    const [image, setImage] = useState(destination[0].image)

    const changeImageTo = (index) => {
        setImage(destination[index].image)
    }

    return (
        <div className={`${styles.page}`}>
            <h5 className="page-title heading-5 upcase">pick your distanation</h5>
            <div className={`${styles.content}`}>
                <div className={`${styles.imageBlock}`}>
                    <img src={image} alt="destanation" />
                </div>
                <div className={styles.tabBlock}>
                    <TabContext tabClickExternalAction={changeImageTo}>
                        <TabBar className={styles.tabBar}>
                            <Tab className={styles.tab} label="moon" value={0} />
                            <Tab className={styles.tab} label="mars" value={1} />
                            <Tab className={styles.tab} label="europe" value={2} />
                            <Tab className={styles.tab} label="titan" value={3} />
                        </TabBar>
                        <TabContent value={0}>
                            <DestinationInfo {...destination[0]} />
                        </TabContent>
                        <TabContent value={1}>
                            <DestinationInfo {...destination[1]} />
                        </TabContent>
                        <TabContent value={2}>
                            <DestinationInfo {...destination[2]} />
                        </TabContent>
                        <TabContent value={3}>
                            <DestinationInfo {...destination[3]} />
                        </TabContent>
                    </TabContext>
                </div>
            </div>
        </div>
    )
}

export default DestinationPage
