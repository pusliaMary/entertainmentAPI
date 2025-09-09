import { useCallback } from "react"
import { useEffect, useState } from "react"

export const BoredomFighting = () => {

    const [advice, setAdvice] = useState('')

    const getAdvice = useCallback(async ()=> {
        const response = await fetch("https://bored.api.lewagon.com/api/activity/")
        const data = await response.json()
        setAdvice(data.activity)
    }, []
)


    useEffect(()=> {
      setAdvice()
    }, [getAdvice])

    

    return (
        <div className="container">
            
            <button onClick={getAdvice}>Click</button>

            <p>{advice}</p>

        </div>
    )
}