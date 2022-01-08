import { useState } from 'react'
import { useMedia } from '../../hooks'
import NavigationBar from '../NavigationBar/NavigationBar'
import NavigationLink from '../NavigationLink/NavigationLink'
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton'
import { mobileBreakpoint, mobileBreakpointVal } from '../../utils/utils'

import styles from './Header.module.css'
import logo from '../../assets/images/shared/logo.svg'
import iconHamburger from '../../assets/images/shared/icon-hamburger.svg'

function Header() {
    const [isNavBarVisible, setVisibility] = useState(!window.innerWidth > mobileBreakpointVal)
    const toggleVisibility = () => setVisibility(!isNavBarVisible)
    useMedia(mobileBreakpoint, (matches) => setVisibility(!matches)) // to prevent menu to be open on leave an back to mobile version
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <hr className={`${styles.hr}`} />
            <NavigationBar isVisible={isNavBarVisible} toggleVisibility={toggleVisibility}>
                <NavigationLink to="/" text="home" number={1} />
                <NavigationLink to="/destination" text="destination" number={2} />
                <NavigationLink to="/crew" text="crew" number={3} />
                <NavigationLink to="/technology" text="technology" number={4} />
            </NavigationBar>
            <MobileMenuButton className={styles.mobileMenuButton} action={toggleVisibility} icon={iconHamburger} isHidden={isNavBarVisible} />
        </header>
    )
}

export default Header
