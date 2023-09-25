import React from 'react'
import {Menu} from 'semantic-ui-react';
import { SiFoodpanda } from 'react-icons/si';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Menu borderless  fixed='top'>
        <Menu.Item>
           <div style={{display:"flex", flexDirection:"row"}}>
            <SiFoodpanda style={{ fontSize:"32px", color:"salmon"}}/>
           <h2 style={{color:"salmon", marginTop:"-6px"}}>FOOD CODE</h2>
           </div>
        </Menu.Item>
        <Menu.Item name='Home' as={Link} to="/" />
        <Menu.Item name='Recipes' as={Link} to="/recipes" />
    </Menu>
  )
}

export default NavBar;