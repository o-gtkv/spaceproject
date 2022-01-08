import React from 'react'
import { Fade } from 'react-reveal'

import styles from './TabContent.module.scss'

function TabContent({ children, visible }) {
    return (
        <div className={`${styles.tabContent} ${visible ? styles.visible : ''}`}>
            <Fade duration={3000}>
                {children}
            </Fade>
        </div>
    )
}

export default TabContent
