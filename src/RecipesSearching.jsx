import { useState, useEffect } from 'react'
import './App.css'
import RecipeComponent from './MyRecipeComponent';
import { useTranslation } from 'react-i18next';

import { LoaderPage } from "./LoaderPage";


export const RecipesSearching = () => {

  
  const MY_ID = "a99efd18";
  const MY_KEY = "4594db8aaae674f333b08b9510ca45e1";
  
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])
  const [inputSubmited, setInputSubmited] = useState('')
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false)
  
  const searching = (e) => {
    setSearch(e.target.value)
     
    
  }

  const finalSubmit = (e) => {
    e.preventDefault()
    setInputSubmited(search)
    
  }



    useEffect(()=> {
    const getRecipe = async ()=> {
      
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputSubmited}&app_id=${MY_ID}&app_key=${MY_KEY}`)

        if (response.ok) {
          
          const data = await response.json();
          setRecipes (data.hits)
        } else {
          alert('ingredients entered incorrectly'); //ЗДЕСЬ НЕ СРАБАТЫВАЕТ АЛЕРТ
        }
          
    } 

    getRecipe()
  }, [inputSubmited] 
) 

 

  return (
    <>
      <div className='container'>
        <header className='column'>
          {loader && <LoaderPage />}
          <h1>{t ('Find a recipe')}</h1>
          
          <form onSubmit={finalSubmit} >
                        
            <input type="text" name='input' placeholder={t ("Enter ingredients...")} onChange={searching} value={search}></input>

                    
          </form>
          
          <button onClick={finalSubmit}>{ t ('Get recipe')}</button>
          
                
        </header>

        
        {recipes.map((element, index)=> (
          
            <RecipeComponent 
              key={index}
              image={element.recipe.image}
              label={element.recipe.label}
              dish = {element.recipe.dishType}
              digest = {element.recipe.digest}
              ingredients={element.recipe.ingredientLines}
                                          
            />
            
            
              
          ))}
        



      </div>
    </>
  )
}






