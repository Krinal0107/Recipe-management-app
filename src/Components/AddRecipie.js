import React from 'react';
import RecipeForm from './RecipeForm';

const AddRecipe = () => {
  const handleAddRecipe = (recipe) => {
    // Add your logic for adding the recipe 
    console.log('New Recipe:', recipe);
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
};

export default AddRecipe;
