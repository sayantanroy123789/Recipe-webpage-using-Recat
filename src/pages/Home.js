import React from 'react'
import Header from '../components/common/Header';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <Header title=" Amazing Recipes" bgClass="bgImage">
        <Button content="SEARCH RECIPES" color='primary' as={Link} to='/recipes' />
    </Header>
  )
}

export default Home;