import React from 'react'
import { useGlobalContext } from '../context'
import { useState } from 'react'
import cocktailList from '../components/CocktailList'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = ({name,image,info}) => {
  const {id} = useParams()
  const {fetchData,setSearchTerm,
    setCocktailList,specificCocktail,cocktailList} = useGlobalContext()
 const backHome = ()=>{
  setSearchTerm('')
  fetchData()
 } 
  return (
    <section className='section cocktail-section'>
     
      <Link to='/' className='btn btn-primary' onClick={backHome}>BACK TO HOME</Link>
      
      {cocktailList.map((item,index)=>{
        const{id,name,category,image,info,glass,instructions,ingredients} = item
        return (<>
        
          <h2 key={index}className='section-title'>{name}</h2>
          <div className='drink'  key={index}>
            <img src={image} alt={name}>
            </img>
            <div className='drink-info'>
              <p> <span className='drink-data'>name:</span>{name}
              </p>
              <p> <span className='drink-data'>category:</span>{category}
              </p>
              <p> <span className='drink-data'>info:</span>{info}
              </p>
              <p> <span className='drink-data'>glass:</span>{glass}
              </p>
              <p> <span className='drink-data'>instructions:</span>{instructions}
              </p>
              <p> <span className='drink-data'>ingredients:</span>{ingredients}
              </p>
            </div>

          </div>
        </>


        )
      })} 
    </section>
  )
}

export default SingleCocktail
