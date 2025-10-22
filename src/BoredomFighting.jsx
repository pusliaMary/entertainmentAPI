import { useCallback } from "react"
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';

export const BoredomFighting = ({lang}) => {

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
            
            <button onClick={getAdvice}>{t ('Click')}</button>

            <p>{advice}</p>

        </div>
    )
}