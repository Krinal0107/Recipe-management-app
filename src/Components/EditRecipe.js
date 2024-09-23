import React from 'react';
import RecipeForm from './RecipeForm';

const EditRecipe = ({ existingRecipe }) => {
  const handleUpdateRecipe = (updatedRecipe) => {
    // Add your logic for updating the recipe (e.g., API call)
    console.log('Updated Recipe:', updatedRecipe);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <RecipeForm onSubmit={handleUpdateRecipe} initialData={existingRecipe} />
    </div>
  );
};

export default EditRecipe;
