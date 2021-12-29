import React, { useRef, useState, useEffect } from 'react'
import { useMedia } from '../../utils/utils'
import Slider from '../Slider/Slider'

import styles from './CrewInfo.module.css'
import { crew } from '../../data/crew'

function getElementHeight(el) {
    const displayVal = el.style.display
    el.style.display = 'flex'
    const h = el.offsetHeight
    el.style.display = displayVal
    return h
}

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
    const imgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const [trackedSlideIndex, setTrackedSlideIndex] = useState(0)
    const [slideHeightMax, setSlideHeightMax] = useState(0)

    const justifySlidesHeight = () => {
        let maxHeight = getElementHeight(slideRefs[0].current)
        for (let i = 1; i < crew.length; ++i)
            maxHeight = Math.max(maxHeight, getElementHeight(slideRefs[i].current))
        setSlideHeightMax(maxHeight)
    }

    const mobileMql = useMedia('(max-width: 560px)')
    useMedia('(min-width: 561px)', (matches) => {
        if (!matches || slideHeightMax)
            return
        justifySlidesHeight()
    })

    const determineMaxHeightImage = (() => {
        let maxHeight = 0
        return (el) => maxHeight = Math.max(maxHeight, getElementHeight(el))
    })()

    const handleImageLoad = (() => {
        let count = 0
        return (e) => {
            ++count
            if (count === crew.length)
                setSlideHeightMax(determineMaxHeightImage(e.target))
            else
                determineMaxHeightImage(e.target)
        }
    })()

    useEffect(() => {
        if (mobileMql.matches || slideHeightMax)
            return
        imgRefs.forEach(img => img.current.addEventListener('load', handleImageLoad))
        return () => imgRefs.forEach(img => img.current.removeEventListener('load', handleImageLoad))
    }, [imgRefs])

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
                            <Info position={item.position} name={item.name} about={item.about} image={item.image} />
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
                            <div className={styles.imageWrapper}>
                                <img
                                    ref={imgRefs[index]}
                                    className={styles.image ?? ''}
                                    src={item.image}
                                    alt="crew"
                                />
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div >
    )
}

export default CrewInfo
