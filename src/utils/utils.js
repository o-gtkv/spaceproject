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

export function isEqual(a, b) {
    const typeA = typeof a
    const typeB = typeof b
    if (typeA !== typeB || (typeA === 'object' && (Array.isArray(a) !== Array.isArray(b))))
        return false
    if (typeA !== 'object' || a === null || b === null)
        return a === b
    if (Array.isArray(a)) {
        if (a.length !== b.length)
            return false
        for (let i = 0; i < a.length; ++i)
            if (!isEqual(a[i], b[i]))
                return false
    }
    else {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        if (keysA.length !== keysB.length)
            return false
        for (let i = 0; i < keysA.length; ++i) {
            const k1 = keysA[i]
            const k2 = keysB[i]
            if (k1.startsWith('_') || k2.startsWith('_'))
                continue
            if (k1 !== k2 || !isEqual(a[k1], b[k2]))
                return false
        }
    }
    return true
}

export function setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg) {
    if (window.matchMedia(mobile).matches)
        document.body.style.backgroundImage = `url(${mobileBgImg})`
    else if (window.matchMedia(tablet).matches)
        document.body.style.backgroundImage = `url(${tabletBgImg})`
    else
        document.body.style.backgroundImage = `url(${desktopBgImg})`
}

export function usePageBackground(desktopBgImg, tabletBgImg, mobileBgImg) {
    const setBg = () => setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg)
    useEffect(() => {
        setBg()
        window.addEventListener('resize', setBg)
        return () => window.removeEventListener('resize', setBg)
    })
}