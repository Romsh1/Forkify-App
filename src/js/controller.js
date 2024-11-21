import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'; 

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();
    //Loading a recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //rendering the recipe
    recipeView.render(model.state.recipe);

  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    //Getting search query
    const query = searchView.getQuery();
    if (!query) return;

    //loading searcg results
    await model.loadSearchResult(query);

    //rendering results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();