import { Children, cloneElement } from 'react'
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton'

import styles from './NavigationBar.module.css'
import iconClose from '../../assets/images/shared/icon-close.svg'

function NavigationBar({ isVisible, children, toggleVisibility }) {
    return (
        <nav className={`${styles.navigationBar} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.mobileMenuButtonWrapper}>
                <MobileMenuButton className={styles.mobileMenuButton} action={toggleVisibility} icon={iconClose} />
            </div>
            {
                Children.map(children, (tab, index) => {
                    return cloneElement(tab, {
                        key: index,
                        onClick: toggleVisibility
                    })
                })
            }
        </nav>
    )
}

export default NavigationBar
