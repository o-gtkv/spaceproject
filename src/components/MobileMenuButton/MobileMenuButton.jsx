import React from 'react'

import styles from './MobileMenuButton.module.scss'

function MobileMenuButton({ icon, action, isHidden, ...props }) {
    return (
        <div className={`${styles.mobileMenuButton} ${isHidden ? styles.hidden : ''} ${props.className ?? ''}`} onClick={action}>
            <img src={icon} alt="hamburger menu" />
        </div>
    )
}

export default MobileMenuButton
