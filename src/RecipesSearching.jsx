import { useState, useEffect, useTranslation } from 'react'
import './App.css'
import RecipeComponent from './MyRecipeComponent';


export const RecipesSearching = () => {

  
  const MY_ID = "a99efd18";
  const MY_KEY = "4594db8aaae674f333b08b9510ca45e1";
  
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])
  const [inputSubmited, setInputSubmited] = useState('')
  const { t } = useTranslation();
  
  

  useEffect(()=> {
    const getRecipe = async ()=> {

      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputSubmited}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json()
      setRecipes (data.hits)
      console.log(data.hits)
      
          
    } 

    getRecipe()
  }, [inputSubmited]
  )

   const searching = (e) => {
      setSearch(e.target.value)
      
    
  }

  const finalSubmit = (e) => {
    e.preventDefault()
    setInputSubmited(search)
    
  }

  

  return (
    <>
      <div className='container'>
        <header className='column'>
          
          <h1>Find a recipe</h1>
          
          <form onSubmit={finalSubmit}>
                        
            <input type="text" placeholder="Enter ingredients..." onChange={searching} value={search}></input>

                    
          </form>
          
          <button onClick={finalSubmit}>Click</button>
          
                
        </header>

        
        {recipes.map((element, index)=> {
          return (
            <RecipeComponent 
              key={index}
              image={element.recipe.image}
              label={element.recipe.label}
              dish = {element.recipe.dishType}
              digest = {element.recipe.digest}
              ingredients={element.recipe.ingredientLines}
                                          
            />
            
              )
              
          })}
        



      </div>
    </>
  )
}






