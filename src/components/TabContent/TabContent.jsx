import React from 'react'

import styles from './TabContent.module.css'

function TabContent({children, visible}) {
    return (
        <div className={`${styles.tabContent} ${visible ? styles.visible : ''}`}>
            {children}
        </div>
    )
}

export default TabContent
