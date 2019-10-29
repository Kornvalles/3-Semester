import React, {useState, useEffect} from 'react';

//useState - Change what is shown
//useEffect - Always run after render()
export default function IntervalCount() {
    const [count, setCount] = useState(0);

    useEffect(function() {
        const s = setInterval(() => {
            setCount(count=>count+1)
        },500)

        //Clears the setInterval to prevent state issues
        return () => clearInterval(s);

    },[])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}