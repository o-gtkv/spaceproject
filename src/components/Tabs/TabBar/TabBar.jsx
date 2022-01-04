import React, { Children, cloneElement } from 'react'

import styles from './TabBar.module.scss'

function TabBar({ children, value, switchToTabWithValue, ...props }) {
    return (
        <div className={`${styles.tabBar} ${props.className ?? ''}`}>
            {
                Children.map(children, (child, index) => {
                    return cloneElement(child, {
                        key: index,
                        signal: switchToTabWithValue,
                        active: child.props.value === value
                    })
                })
            }
        </div>
    )
}

export default TabBar
