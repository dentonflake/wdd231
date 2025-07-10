const recipeCards = document.getElementById('recipe-cards');

const fetchRecipes = async () => {
  try {

    const response = await fetch('./data/recipes.json');

    if (!response.ok) {
      throw new Error('Failed to fetch recipes.json');
    }

    return await response.json();

  } catch (error) {

    console.error('Error loading recipes:', error);
  }
}

const loadRecipes = async () => {

  const recipes = await fetchRecipes();

  const totals = recipes.reduce((acc, recipe) => {
    const category = recipe.category;

    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category]++;
    return acc;
  }, {});

  console.log(totals);
}

loadRecipes();