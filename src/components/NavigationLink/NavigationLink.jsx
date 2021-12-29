import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './NavigationLink.module.css'

function NavigationLink({ to, text, number, onClick = Function.prototype }) {
    const location = useLocation()

    return (
        <div className={`${styles.navigationLink} ${to === location.pathname ? styles.active : ''}`}>
            <Link
                className={styles.link}
                to={to}
                onClick={onClick}
                state={number}
                datalinknumber={number}
            >
                {text}
            </Link>
        </div>
    )
}

export default NavigationLink
