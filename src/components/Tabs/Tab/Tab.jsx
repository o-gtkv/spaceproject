import React from 'react'

import styles from './Tab.module.scss'

function Tab({ label, value, signal, active, ...props }) {
    const handleClick = () => signal(value)
    return (
        <div
            className={`${styles.tab} ${active ? styles.active : ''} ${props.className ?? ''}`}
            onClick={handleClick}
        >
            <span className="upcase">{label}</span>
        </div>
    )
}

export default Tab
