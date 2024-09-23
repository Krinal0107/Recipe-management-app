import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="left-container">
          <h2 className='nav-header'>Suger & spice</h2>
          <FontAwesomeIcon className='utensil-icon' icon={faUtensils} />
        </Link>
        <p>Your One Stop Shop For Amazing Recipes</p>
        <Link to="/add-recipe" className="left-container">
          <h2 className='nav-header'>Add Recipe</h2>

        </Link>
    </div>
  )
}

export default Navbar