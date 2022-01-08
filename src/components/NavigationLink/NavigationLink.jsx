import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './NavigationLink.module.css'

function NavigationLink({ to, text, number, onClick = Function.prototype, ...props }) {
    const location = useLocation()

    return (
        <Link
            className={`${styles.navigationLink} ${props.className ?? ''} ${to === location.pathname ? styles.active : ''}`}
            to={to}
            onClick={onClick}
            state={number}
            datalinknumber={number}
        >
            {text}
        </Link>
    )
}

export default NavigationLink
