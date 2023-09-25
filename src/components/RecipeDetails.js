import React, { useEffect, useState } from 'react'
import { getRecipe } from '../services/api';
import { Link, useParams } from 'react-router-dom';
import { Grid,Button, Image, Header, Segment } from 'semantic-ui-react';
function RecipeDetails() {
    const [recipe, setRecipe]=useState({})
    const {recipeId}=useParams()
    useEffect(()=>{
        const getData=async ()=>{
        let result=  await  getRecipe(recipeId)
        if (result && result.recipe){
            setRecipe(result.recipe)
        }
        
        }
            getData();
    },[])
  return (
    Object.keys(recipe).length> 0 ?
    <Grid container stackable columns={2} className='detailsPageContainer' >
        <Grid.Column>
            <Button  
             as={Link}
             to={'/recipes'}
             content='Back to Recipe list'
             color='yellow'
             style={{marginBottom:"32px"}}
            />
            <Image src={recipe.image_url}/>
        </Grid.Column>
        <Grid.Column>
            <Header size='medium'>{recipe.title}</Header>
            <h5 style={{color:"yellowgreen"}}>Provided By {recipe.publisher}</h5>
            <Button 
            as={"a"}
            href={recipe.publisher_url}
            target="_blank"
            content="Publisher webpage"
            color='blue'
            />
             <Button 
            as={"a"}
            href={recipe.source_url}
            target="_blank"
            content="Recipe URL"
            color='green'
            />
            <Header size='large' content="Ingredients"/>
            <Segment.Group>
                {
                    recipe && recipe.ingredients.map(data=>(
                        <Segment>
                            <h5>{data} </h5>
                        </Segment>
                    ))
                }
            </Segment.Group>
        </Grid.Column>

    </Grid> : null
  )
}

export default RecipeDetails;