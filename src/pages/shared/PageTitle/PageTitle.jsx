import { Flip } from 'react-reveal'

export default function PageTitle({ text, pageNumber }) {
    return (
        <Flip left cascade>
            <h5 className="page-title heading-5 upcase" datapagenumber={pageNumber}>{text}</h5>
        </Flip>
    )
}
