import { useState, useEffect } from 'react'
import { tabletBreakpointVal, mobileBreakpointVal } from './utils/utils'

function setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg) {
    if (window.innerWidth <= mobileBreakpointVal)
        document.body.style.backgroundImage = `url(${mobileBgImg})`
    else if (window.innerWidth <= tabletBreakpointVal)
        document.body.style.backgroundImage = `url(${tabletBgImg})`
    else
        document.body.style.backgroundImage = `url(${desktopBgImg})`
}

export function useMedia(query, callback) {
    const [mql, setMql] = useState(window.matchMedia(query))
    useEffect(() => {
        const cb = () => {
            if (callback)
                callback(mql.matches)
        }
        mql.addEventListener("change", setMql)
        mql.addEventListener("change", cb)
        return () => {
            mql.removeEventListener("change", setMql)
            mql.removeEventListener("change", cb)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return mql
}

export function useBodyBackground(desktopBgImg, tabletBgImg, mobileBgImg) {
    useEffect(() => {
        const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })
}