import { useState } from 'react'
import { useLocation } from 'react-router'
import { TabBar, Tab, TabContent, TabContext } from '../../components/Tabs/Tabs'
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo'
import { useBodyBackground } from '../../hooks'

import styles from './DestinationPage.module.scss'
import { destination } from '../../data/destination'
import mobileBgImg from '../../assets/images/destination/background-destination-mobile.jpg'
import tabletBgImg from '../../assets/images/destination/background-destination-tablet.jpg'
import desktopBgImg from '../../assets/images/destination/background-destination-desktop.jpg'

function DestinationPage() {
    const [image, setImage] = useState(destination[0].image)
    const changeImageTo = (index) => setImage(destination[index].image)
    const pageNumber = useLocation().state
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    return (
        <div className="container">
            <div className={`${styles.page}`}>
                <h5 className="page-title heading-5 upcase" datapagenumber={pageNumber}>pick your distanation</h5>
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
        </div>
    )
}

export default DestinationPage
