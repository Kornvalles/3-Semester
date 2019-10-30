import React, { useState, useEffect } from 'react';
import App from './App';

//useState - Change what is shown
//useEffect - Always run after render()
function IntervalCount(props) {
    const { count, setCount } = props;
    const [negativeCount, setNegativeCount] = useState(false);
    const [startCount, setStartCount] = useState(false);
    //Incrementing
    useEffect(function () {

        if (startCount === false) {
            return
        }

        const s = setInterval(() => {
            setCount(count => count + 1)
        }, 500)

        //Clears the setInterval to prevent state issues
        return () => clearInterval(s);

    }, [startCount])
    //Decrementing
    useEffect(function () {

        if (negativeCount === false) {
            return
        }

        const s = setInterval(() => {
            setCount(count => count - 1)
        }, 500)

        //Clears the setInterval to prevent state issues
        return () => clearInterval(s);

    }, [negativeCount])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setStartCount(!startCount)
                setNegativeCount(false)
            }}>Start Count Up</button>
            <button onClick={() => {
                setStartCount(false)
                setNegativeCount(!negativeCount)
            }}>Start Count Down</button>
        </div>
    )
}

export default App;