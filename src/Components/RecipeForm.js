import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [ingredients, setIngredients] = useState(initialData.ingredients || '');
  const [instructions, setInstructions] = useState(initialData.instructions || '');
  const [cuisine, setCuisine] = useState(initialData.cuisine || '');
  const [cookingTime, setCookingTime] = useState(initialData.cookingTime || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      title,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions,
      cuisine,
      cookingTime,
    };
    onSubmit(recipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Cuisine Type</label>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cooking Time (in minutes)</label>
        <input
          type="number"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialData.title ? 'Update Recipe' : 'Add Recipe'}</button>
    </form>
  );
};

export default RecipeForm;
