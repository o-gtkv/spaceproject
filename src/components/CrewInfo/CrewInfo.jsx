import React, { useRef, useState } from 'react'
import { useMedia } from '../../hooks'
import Slider from '../Slider/Slider'
import { getElementHeight, mobileBreakpoint, mobileBreakpointVal } from '../../utils/utils'

import styles from './CrewInfo.module.css'
import { crew } from '../../data/crew'

function Info({ position, name, about }) {
    return (
        <div className={styles.info}>
            <h4 className={`heading-4 upcase ${styles.crewPosition}`}>{position}</h4>
            <h3 className={`heading-3 upcase ${styles.crewName}`}>{name}</h3>
            <p className="regular-text">{about}</p>
        </div>
    )
}

function CrewInfo() {
    const slideRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const [trackedSlideIndex, setTrackedSlideIndex] = useState(0)
    const [slideHeightMax, setSlideHeightMax] = useState(0)

    const justifySlidesHeight = () => {
        let maxHeight = getElementHeight(slideRefs[0].current)
        for (let i = 1; i < crew.length; ++i)
            maxHeight = Math.max(maxHeight, getElementHeight(slideRefs[i].current))
        setSlideHeightMax(maxHeight)
    }

    const mobileMql = useMedia(mobileBreakpoint)
    useMedia(`(min-width: ${mobileBreakpointVal + 1}px)`, (matches) => {
        if (!matches || slideHeightMax)
            return
        justifySlidesHeight()
    })

    const determineMaxHeightImage = (() => {
        let maxHeight = 0
        return (el) => maxHeight = Math.max(maxHeight, getElementHeight(el))
    })()

    const handleImageLoad = ((e) => {
        let count = 0
        return (e) => {
            ++count
            if (count === crew.length)
                setSlideHeightMax(determineMaxHeightImage(e.target))
            else
                determineMaxHeightImage(e.target)
        }
    })()

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
                    crew.map((item, index) =>
                        <div key={index}>
                            <Info
                                position={item.position}
                                name={item.name}
                                about={item.about}
                            />
                        </div>
                    )
                }
            </Slider>
            <Slider
                className={styles.controlledSlider}
                changeSlideOnClick={false}
                activeIndex={trackedSlideIndex}
                style={{
                    ...(
                        (mobileMql.matches && { height: '215px' }) ||
                        (slideHeightMax && { height: slideHeightMax + 'px' })
                    )
                }}
            >
                {
                    crew.map((item, index) =>
                        <div ref={slideRefs[index]} className={styles.controlledSliderSlide} key={index}>
                            <picture
                                className={styles.picture}
                                onLoad={e => handleImageLoad(e)}
                            >
                                <source
                                    srcSet={item.image.webp}
                                    type="image/webp"
                                />
                                <img
                                    className={styles.image}
                                    srcSet={item.image.png}
                                    alt="crew"
                                />
                            </picture>
                        </div>
                    )
                }
            </Slider>
        </div >
    )
}

export default CrewInfo
