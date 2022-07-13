import React, { useContext, useEffect } from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
  const {searchTerm,setSearchTerm,cocktailList}=useGlobalContext()
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  
  
  return (
    <form className='search-form'>
      <div className='form-control' name='name'>
        <label htmlFor='name'>input your favorite cocktail
          <input type='text' onChange={(e)=>setSearchTerm(e.target.value)
            } onSubmit={handleSubmit} autoFocus>

          </input>
        </label>
      </div>

    </form>
  )
}

export default SearchForm
