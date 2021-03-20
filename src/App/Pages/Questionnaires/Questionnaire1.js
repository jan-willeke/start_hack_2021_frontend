import React, {useState} from 'react'
import RubberSlider from '@shwilliam/react-rubber-slider'
import '@shwilliam/react-rubber-slider/dist/styles.css'

export default function Questionnaire1() {

    const [value, setValue] = useState(0.5);

    return <div className="container p-4">
        <h1>Expand your horizons</h1>
        <RubberSlider width={250} value={value} onChange={setValue} />
    </div>;
}