import React, { Children, cloneElement, useState } from 'react'
import TabContent from '../TabContent/TabContent'
import TabBar from '../TabBar/TabBar'

import styles from './TabContext.module.scss'

function TabContext({ children, tabClickExternalAction = Function.prototype }) {
    const [value, setValue] = useState(0)

    const switchToTabWithValue = (value) => {
        setValue(value)
        tabClickExternalAction(value) // some external callback on tab switch
    }

    return (
        <div className={styles.tabContext ?? ''}>
            {
                Children.map(children, (child) => {
                    if (child.type === TabBar) {
                        return cloneElement(child, {
                            value,
                            switchToTabWithValue
                        })
                    }
                    else if (child.type === TabContent) {
                        return cloneElement(child, {
                            visible: child.props.value === value,
                            switchToTabWithValue
                        })
                    }
                    return child
                })
            }
        </div>
    )
}

export default TabContext
