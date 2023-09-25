import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
function RecipeListItem({recipe}) {
  return (
    <Card >
        <img src={recipe.image_url} style={{height:"120px"}}/>
        <Card.Content>
            <Card.Header content={recipe.title}/>
            <Card.Description>
                <h4 style={{color:"yellowgreen"}}>{recipe.publisher}</h4>
            </Card.Description>
        </Card.Content>
            <Button content="Details"
                as={Link}
                to={`/recipes/${recipe.recipe_id}`}
            color='primary'
            size='tiny'/>
            {/* <Button content="Recipe URL"
            // color='green'/> */}
            <Button content="Recipe URL"
            color='green'
            size='tiny'
            href={recipe.source_url}
            target="_blank" />
    </Card>
  )
}

export default RecipeListItem;