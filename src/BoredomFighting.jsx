import { useCallback } from "react"
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';


import { LoaderPage } from "./LoaderPage";

export const BoredomFighting = () => {

    const [advice, setAdvice] = useState('')

    const { t } = useTranslation();

    const [loader, setLoader] = useState(false)

    const getAdvice = useCallback(async ()=> {
        setLoader(true)
        const response = await fetch("https://bored.api.lewagon.com/api/activity/")
        const data = await response.json()
        setAdvice(data.activity)
        const timer = setTimeout(()=> setLoader(false), 14000)
        return ()=> clearTimeout(timer)
    }, []
)

    useEffect(()=> {
        setAdvice()
        
    }, [getAdvice])

    

    return (
        <div className="container">
            
            {loader && <LoaderPage />}

            <p>{advice}</p>
            
            <button onClick={getAdvice}>{t ('Click')}</button>

            

        </div>
    )
}