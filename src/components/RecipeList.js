import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';
function RecipeList({recipes,searchQuery}) {
  return (
    <Container>
        <Header 
            size='huge'
            content={`Recipe list for ${searchQuery}`}
            textAlign='center'
        />
        <Grid columns={4} doubling>
            {
                recipes && recipes.map(recipe=>(
                    <Grid.Column>
                       <RecipeListItem recipe={recipe}/>
                    </Grid.Column>
                ))
            }
        </Grid>
    </Container>
  )
}

export default RecipeList;