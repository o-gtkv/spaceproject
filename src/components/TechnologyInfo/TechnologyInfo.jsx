import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import { useMedia } from '../../hooks'

import { technology } from '../../data/technology'
import styles from './TechnologyInfo.module.scss'

function TechnologyInfo() {
    const [trackedSlideIndex, setTrackedSlideIndex] = useState(0)
    const mql = useMedia('(max-width: 1300px)')

    return (
        <div className={styles.content}>
            <Slider
                className={styles.mainSlider}
                pagination={{
                    paginationBarClass: styles.paginationBar,
                    bulletClass: styles.bullet,
                    bulletActiveClass: styles.bulletActive,
                }}
                autoplay={{ delay: 3000 }}
                onSlideChange={setTrackedSlideIndex}
            >
                {
                    technology.map((item, index) =>
                        <div key={index} className={styles.mainSliderSlide}>
                            <div>
                                <h6 className={`heading-6 upcase ${styles.title}`}>the technology...</h6>
                                <h3 className={`heading-3 upcase ${styles.techName}`}>{item.name}</h3>
                                <p className="regular-text">{item.description}</p>
                            </div>
                        </div>
                    )
                }
            </Slider>
            <Slider
                className={styles.controlledSlider}
                changeSlideOnClick={false}
                activeIndex={trackedSlideIndex}
            >
                {
                    technology.map((item, index) =>
                        <div className={styles.controlledSliderSlide ?? ''} key={index}>
                            <div className={styles.imageWrapper ?? ''}>
                                <img
                                    className={styles.image ?? ''}
                                    src={mql.matches ? item.imageLandscape : item.imagePortrait}
                                    alt="technology"
                                />
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export default TechnologyInfo
