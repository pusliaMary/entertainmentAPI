import { useCallback, useEffect, useState } from "react"

export const GetInsulted = () => {

    const [insult, setInsult] = useState('')

    const getInsulted = useCallback(async ()=> {

        
        const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        const data = await response.json()
        setInsult(data.insult)
        
    })
    
    
    useEffect(()=> {
        setInsult()
    }, [getInsulted]
    )




    return (
        <div className="container">
            <button onClick={getInsulted}>Are you sure?</button>

            <p>{insult}</p>
        </div>
    )
}