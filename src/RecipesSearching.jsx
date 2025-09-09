import { useState, useEffect } from 'react'
import './App.css'
import RecipeComponent from './MyRecipeComponent';


export const RecipesSearching = () => {

  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])
  const [inputSubmited, setInputSubmited] = useState('')
  
  
  

  useEffect(()=> {
    const getRecipe = async ()=> {

      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputSubmited}&app_id=10c64d0f&app_key=019a427d6f0c04d8ba0964f6f48a4c4f`)
      const data = await response.json()
      setRecipes (data.hits)
          
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
          
          <button onClick={finalSubmit}>Submit</button>
          
                
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






