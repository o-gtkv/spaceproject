import image1Png from '../assets/images/crew/image-douglas-hurley.png'
import image1Webp from '../assets/images/crew/image-douglas-hurley.webp'
import image2Png from '../assets/images/crew/image-mark-shuttleworth.png'
import image2Webp from '../assets/images/crew/image-mark-shuttleworth.webp'
import image3Png from '../assets/images/crew/image-victor-glover.png'
import image3Webp from '../assets/images/crew/image-victor-glover.webp'
import image4Png from '../assets/images/crew/image-anousheh-ansari.png'
import image4Webp from '../assets/images/crew/image-anousheh-ansari.webp'

export const crew = [
    {
        position: 'commander',
        name: 'Douglas Hourley',
        about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: {
            png: image1Png,
            webp: image1Webp
        }
    },

    {
        position: 'mission specialist',
        name: 'Mark Shuttleworth',
        about: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: {
            png: image2Png,
            webp: image2Webp
        }
    },

    {
        position: 'pilot',
        name: 'Victor Glover',
        about: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: {
            png: image3Png,
            webp: image3Webp
        }
    },

    {
        position: 'flight Engineer',
        name: 'Anousheh Ansari',
        about: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: {
            png: image4Png,
            webp: image4Webp
        }
    }
]