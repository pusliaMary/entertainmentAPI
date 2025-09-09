import { useState } from "react"



function RecipeComponent ({image, label, dish, digest, ingredients}) {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className="column card">
            <div className="column">
                <img src={image} alt="pic" width="400px" />
                <h2>{label}</h2>
                <p>Category: {dish}</p>
            </div> 

            <div className="row">
                {digest.filter(item => ['Protein', 'Fat', 'Carbs'].includes(item.label)).map((element, index) => {
                    
                    return (
                        
                        <div key={index}>
                           <p className="label">{element.label}</p>
                           <p >{element.daily.toFixed()}</p>
                        </div>
                        
                        
                    )
                })}

               
            </div>
            
            
                
            <div className="column">
                <button className='btn' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Hide ingedients' : 'Show ingredients'}</button>
                    
                    {ingredients.map((element, index)=> {
                        return (
                                <div key={index} className={showMore ? 'block' : 'none'}>
                                    <p>{element}</p>
                                </div>
                        )
                    })}

                     
                    
                    
                
            </div>
              
        
        </div>
    )
}

export default RecipeComponent