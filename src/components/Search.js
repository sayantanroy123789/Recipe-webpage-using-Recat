import React from 'react';
import { useState } from 'react';
import { Grid, Form, Input, Focus } from 'semantic-ui-react';
function Search({setSearchQuery}) {
    const [value,setValue]=useState("")
    const onFormSubmit=()=>{
        setSearchQuery(value);
    }
  return (
    <Grid column={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Rceipes with <span style={{color:"salmon"}}>FOOD CODE</span> </h2>
       <h4>Type Recipes Separated By Comma</h4>
       <Form onSubmit={onFormSubmit}>
            <Input Focus
              placeholder="chicken,onion,carrot"
              action={{icon:"search", color:"blue"}}
              size="big"
              onChange={(e)=>setValue(e.target.value)}
              value={value}
              
            />
       </Form>
        </Grid.Column>
    </Grid>
  )
}

export default Search;