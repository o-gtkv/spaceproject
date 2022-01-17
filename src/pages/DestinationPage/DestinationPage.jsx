import { useState } from 'react'
import { useLocation } from 'react-router'
import { useBodyBackground } from '../../hooks'
import { Zoom, Fade } from 'react-reveal'
import { TabBar, Tab, TabContent, TabContext } from '../../components/Tabs/Tabs'
import PageTitle from '../shared/PageTitle/PageTitle'
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo'

import styles from './DestinationPage.module.css'
import { destination } from '../../data/destination'
import mobileBgImg from '../../assets/images/destination/background-destination-mobile.jpg'
import tabletBgImg from '../../assets/images/destination/background-destination-tablet.jpg'
import desktopBgImg from '../../assets/images/destination/background-destination-desktop.jpg'

function DestinationPage() {
    const [image, setImage] = useState(destination[0].image)
    const pageNumber = useLocation().state
    useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg)
    const changeImageTo = (index) => setImage(destination[index].image)
    return (
        <div className="container">
            <div className={styles.page}>
                <PageTitle text="pick your distanation" pageNumber={pageNumber} />
                <div className={styles.content}>
                    <div className={styles.imageBlock}>
                        <Zoom right delay={-400} duration={1700} spy={image}>
                            <Fade duration={3000}>
                                <picture>
                                    <source srcSet={image.webp} type="image/webp" />
                                    <img className={styles.image ?? ''} src={image.png} alt="Destination" />
                                </picture>
                            </Fade>
                        </Zoom>
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
