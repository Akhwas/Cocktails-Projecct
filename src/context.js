import React, { useState, useContext, useEffect } from 'react'
// import axios from 'axios'
import { useCallback } from 'react'
import CocktailList from './components/CocktailList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [cocktailList,setCocktailList]= useState([])
  const [searchTerm,setSearchTerm]=useState('a')

  const  fetchData=async()=>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {drinks} = data

      if (drinks){
        const newDrinks = drinks.map((drink)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass,strCategory,strInstructions,strIngredient1,strIngredient2,
          strIngredient3,
          strIngredient4} = drink
          
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,
          category: strCategory,
          instructions:strInstructions,
          glass:strGlass,
        ingredients:[strIngredient1,strIngredient2,
          strIngredient3,
          strIngredient4].join(' ')}
        })
        setCocktailList(newDrinks)
        
        console.log(cocktailList)
      }
      else {
        setCocktailList([])
      }
      
    } catch (error) {
  console.log(error)
    }
    setLoading(false)
  }
  const specificCocktail =(id)=> setCocktailList((cocktailList)=>{return cocktailList.filter((cocktail)=>cocktail.id===id)})

useEffect(()=>{ 
fetchData()
console.log(cocktailList)
}
,[searchTerm,setCocktailList])
  return <AppContext.Provider value={{fetchData,loading,cocktailList,searchTerm,setSearchTerm,specificCocktail}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
