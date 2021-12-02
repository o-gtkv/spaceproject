import React, { useState, useEffect } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import NavigationLink from '../NavigationLink/NavigationLink'

import MobileMenuButton from '../MobileMenuButton/MobileMenuButton'

import styles from './Header.module.css'
import logo from '../../assets/images/shared/logo.svg'
import iconHamburger from '../../assets/images/shared/icon-hamburger.svg'

function Header() {
    const [isNavBarVisible, setVisibility] = useState(!window.matchMedia('(max-width: 425px)').matches)

    const handleResize = () => {
        setVisibility(!window.matchMedia('(max-width: 425px)').matches)        
    }

    const toggleVisibility = () => {
        setVisibility(!isNavBarVisible)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)        
    })

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.hr} />
            <NavigationBar isVisible={isNavBarVisible} toggleVisibility={toggleVisibility}>
                <NavigationLink to="/" text="home" />
                <NavigationLink to="/destination" text="destination" />
                <NavigationLink to="/crew" text="crew" />
                <NavigationLink to="/technology" text="technology" />
            </NavigationBar>
            <MobileMenuButton className={styles.mobileMenuButton} action={toggleVisibility} icon={iconHamburger} isHidden={isNavBarVisible} />
        </header>
    )
}

export default Header
