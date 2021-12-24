import React from 'react'

import styles from './DestinationInfo.module.css'

function DestinationInfo({name, text, avgDistance, estTravelTime}) {
    return (
        <div className={styles.destinationInfo}>
            <div className={`${styles.content}`} >
                <h2 className="heading-2 upcase">{name}</h2>
                <p className="regular-text">{text}</p>
                <hr />
                <div className={styles.aboutTravelData}>
                    <div className={styles.aboutTravelDataItem}>
                        <div className={`${styles.aboutTravelDataItemName} upcase`}>avg. distance</div>
                        <div className="subheading1 upcase">{avgDistance}</div>
                    </div>
                    <div className={styles.aboutTravelDataItem}>
                        <div className={`${styles.aboutTravelDataItemName} upcase`}>est. travel time</div>
                        <div className="subheading1 upcase">{estTravelTime}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo
