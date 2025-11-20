import { useCallback, useState } from "react"
import { useTranslation } from 'react-i18next';

export const GetInsulted = () => {

    const [insult, setInsult] = useState('')

    const { t } = useTranslation();

    const getInsulted = useCallback(async ()=> {

        const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json'); 
        if (response.ok) {
            const data = await response.json();
            setInsult(data.insult)
        }

        
        
        else {
            alert("Something went wrong") // ВОТ ЭТОТ КОД НЕ СРАБАТЫВАЕТ ПОЧЕМУ-ТО
        }    
        
    }
        
    )

  
 
    return (
        <div className="container">
            <h2>{t ("Node.js needed to fix CORS. Soon")}</h2>
            <button onClick={getInsulted}>{t ("Are you sure?")}</button>

            <p className="advice">{insult}</p>
        </div>
    )
}