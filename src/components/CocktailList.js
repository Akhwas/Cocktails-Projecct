import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktailList} = useGlobalContext()
  console.log(cocktailList)
  if(loading){
    return <Loading/>
  }

  if(cocktailList.length<1){

    return(<h2>there is no matching cocktails</h2>)
  }
  
 return (<div className='cocktails-center'>
  {
   cocktailList.map((cocktail)=>{
  
      const {id,name,image,info,glass}
      =cocktail 
      return (<Cocktail key={id} {...cocktail}/>
        )
      })
 } 
 </div>)
  
}

export default CocktailList
