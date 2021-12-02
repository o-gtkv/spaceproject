const tablet = '(max-width: 768px)'
const mobile = '(max-width: 425px)'

export function setBodyBackgroundImage(desktopBgImg, tabletBgImg, mobileBgImg) {
    if (window.matchMedia(mobile).matches) 
        document.body.style.backgroundImage = `url(${mobileBgImg})`    
    else if (window.matchMedia(tablet).matches)
        document.body.style.backgroundImage = `url(${tabletBgImg})`    
    else 
        document.body.style.backgroundImage = `url(${desktopBgImg})`    
}