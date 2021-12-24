import React  from 'react'

import styles from './Tab.module.css'

function Tab({label, value, signal, active, ...props}) {
    const handleClick = () => {
        signal(value)
    }

    return (        
        <div className={`${styles.tab} ${active ? styles.active : ''} ${props.className ?? ''}`}>
            <span className="upcase" onClick={handleClick}>{label}</span>
        </div>    
    )
}

export default Tab
