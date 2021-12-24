import { useState, useEffect } from 'react'

const tablet = '(max-width: 1300px)'
const mobile = '(max-width: 560px)'

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
    }, [])
    return mql
}

export function setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg) {
    if (window.matchMedia(mobile).matches)
        document.body.style.backgroundImage = `url(${mobileBgImg})`
    else if (window.matchMedia(tablet).matches)
        document.body.style.backgroundImage = `url(${tabletBgImg})`
    else
        document.body.style.backgroundImage = `url(${desktopBgImg})`
}