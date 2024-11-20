import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(error);
  }
};

// showRecipe();

['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));
// window.addEventListener('hashChange', showRecipe);
// window.addEventListener('load', showRecipe);