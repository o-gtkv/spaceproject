import React, { useEffect, useState, Children, cloneElement } from 'react'
import { isEqual } from '../../utils/utils'

import styles from './Slider.module.scss'

class Autoplay {
    static defaultDelay = 1000

    constructor(slider, delay) {
        this.interval_ = null
        this.slider_ = slider
        this.delay_ = delay ?? Autoplay.defaultDelay
    }

    start = () => {
        if (this.interval_ === null)
            this.interval_ = setInterval(this.slider_.nextSlide, this.delay_)
    }

    stop = () => {
        clearInterval(this.interval_)
        this.interval_ = null
    }

    restart = () => {
        if (this.interval_) {
            this.stop()
            this.start()
        }
    }
}

class Slider extends React.Component {
    static defaultProps = {
        pagination: null,
        changeSlideOnClick: true
    }

    constructor(props) {
        super(props)
        const tmp = Children.toArray(this.props.children)
        const activeIndex = this.props.activeIndex ?? 0
        this.slideClassName = tmp.map(slide => slide.props.className)
        this.state = {
            activeIndex,
            slides: this.cloneSlides(tmp)
        }
    }

    cloneSlides = (tmp) => {
        const activeIndex = this.props.activeIndex ?? 0
        return [
            ...tmp.slice(0, activeIndex)
                .map((slide, i) => cloneElement(slide, {
                    className: `${styles.slide} ${this.slideClassName[i]}`,
                    onClick: this.props.changeSlideOnClick ? this.nextSlide : null
                })),
            cloneElement(tmp[activeIndex], {
                className: `${styles.slideActive} ${this.slideClassName[activeIndex]}`,
                onClick: this.props.changeSlideOnClick ? this.nextSlide : null
            }),
            ...tmp.slice(activeIndex + 1, tmp.length)
                .map((slide, i) => cloneElement(slide, {
                    className: `${styles.slide} ${this.slideClassName[i]}`,
                    onClick: this.props.changeSlideOnClick ? this.nextSlide : null
                }))
        ]
    }

    componentDidUpdate = (prevProps) => {
        if (!isEqual(prevProps, this.props)) {
            const tmp = Children.toArray(this.props.children)
            const activeIndex = this.props.activeIndex ?? 0
            this.slideClassName = tmp.map(slide => slide.props.className)
            this.setState({
                activeIndex,
                slides: this.cloneSlides(tmp)
            })
        }

        if (this.props.activeIndex === undefined ||
            this.props.activeIndex === this.state.activeIndex)
            return
        this.setSlide(this.props.activeIndex)
    }

    componentDidMount = () => {
        this.autoplay = this.props.autoplay ? new Autoplay(this, this.props.autoplay.delay) : null
        this.autoplay?.start()
    }

    componentWillUnmount = () => {
        this.autoplay?.stop()
    }

    setSlide = (index) => {
        const { activeIndex, slides } = this.state
        const tmp = slides
        tmp[activeIndex] = cloneElement(slides[activeIndex], {
            className: `${styles.slide} ${this.slideClassName[activeIndex]}`,
        })
        tmp[index] = cloneElement(slides[index], {
            className: `${styles.slideActive} ${this.slideClassName[index]}`,
        })
        this.setState(state => {
            return {
                ...{ state },
                activeIndex: index,
                slides: tmp
            }
        })
        if (this.props.onSlideChange)
            this.props.onSlideChange(index)
    }

    nextSlide = () => {
        this.setSlide((this.state.activeIndex + 1) % this.state.slides.length)
    }

    render = () => {
        return (
            <div className={`${styles.wrapper ?? ''} ${this.props.className ?? ''}`}>
                <div
                    className={styles.slider}
                    onMouseLeave={this.autoplay?.start}
                    onMouseEnter={this.autoplay?.stop}
                    style={this.props.style}
                >
                    {
                        this.state.slides
                    }
                </div>
                {
                    this.props.pagination
                        ? <Pagination
                            classNames={{
                                paginationBar: this.props.pagination.paginationBarClass ?? '',
                                bullet: this.props.pagination.bulletClass ?? '',
                                bulletActive: this.props.pagination.bulletActiveClass ?? ''
                            }}
                            bulletCount={this.state.slides.length}
                            activeSlideIndex={this.state.activeIndex}
                            setSlide={(index) => {
                                this.setSlide(index)
                                this.autoplay?.restart()
                            }}
                        />
                        : null
                }
            </div >
        )
    }
}

function Pagination({ activeSlideIndex, bulletCount, setSlide, ...props }) {
    const [activeIndex, setActiveIndex] = useState(activeSlideIndex)

    useEffect(() => {
        setActiveIndex(activeSlideIndex)
    }, [activeSlideIndex])

    const { paginationBar, bullet, bulletActive } = props.classNames
    const bullets = Array(bulletCount)
    for (let i = 0; i < bullets.length; i++) {
        bullets[i] = <span
            key={i}
            className={`${styles.bullet} ${bullet}`}
            onClick={() => {
                setSlide(i)
                setActiveIndex(i)
            }}
        />
    }

    bullets[activeIndex] = cloneElement(bullets[activeIndex], {
        className: `${styles.bullet} ${styles.bulletActive} ${bullet} ${bulletActive}`
    })

    return <div className={`${styles.paginationBar} ${paginationBar}`}>{bullets}</div>
}

export default Slider