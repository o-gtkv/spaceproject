export const tabletBreakpointVal = 1300, mobileBreakpointVal = 560
export const tabletBreakpoint = `(max-width: ${tabletBreakpointVal}px)`
export const mobileBreakpoint = `(max-width: ${mobileBreakpointVal}px)`

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