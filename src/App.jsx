import { useEffect } from "react"
import Banner from "./fragments/Banner"
import Counter from "./fragments/Counter"
import Gift from "./fragments/Gift"
import Invitation from "./fragments/Invitation"
import Line from "./fragments/Line"
import Outfit from "./fragments/Outfit"
import Parents from "./fragments/Parents"
import Photo from "./fragments/Photo"
import Phrase from "./fragments/Phrase"
import Phrase2 from "./fragments/Phrase2"
import Phrase3 from "./fragments/Phrase3"
import Place from "./fragments/Place"
import Tickets from "./fragments/Tickets"
import Verse from "./fragments/Verse"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Banner />
            <Phrase />
            <Verse />
            <Parents />
            <Counter />
            <Place />
            <Line />
            <Outfit />
            <Gift />
            <Phrase2 />
            <Photo />
            <Tickets />
            <Phrase3 />
            <Invitation />
        </>
    )
}

export default App
