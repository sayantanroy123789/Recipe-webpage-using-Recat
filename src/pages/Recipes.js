import React, { useEffect } from 'react'
import { useState } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';
import { getRecipes } from '../services/api';
function Recipes() {
    const [searchQuery, setSearchQuery]=useState("chicken")
    const [recipes, setRecipes]=useState([])
    useEffect(()=>{
        getSearchResult()
    },[searchQuery])
    const getSearchResult= async()=>{
     let result=  await getRecipes(searchQuery);
     if (result && result.recipes){
        setRecipes(result.recipes);
     }
    }
  return (
    <div>
        
        <Search setSearchQuery={setSearchQuery}/>
        <RecipeList recipes={recipes} searchQuery={searchQuery}/>
    </div>
  )
}

export default Recipes;