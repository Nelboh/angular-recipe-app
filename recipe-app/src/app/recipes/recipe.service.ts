import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Beautiful Bread', 
            'Fill your home with the scent of freshly baked bread', 
            'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg', 
            [
                new Ingredient('Grams of bread flour', 500),
                new Ingredient('Grams of yeast', 1),
                new Ingredient('Tsps of salt', 2),
                new Ingredient('Mls of water', 300),
                new Ingredient('Tbsps of olive oil', 3),
            ]),
        new Recipe('Fabulous Falafel', 
            'The ultimate veggie falafel recipe', 
            'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg', 
            [
                new Ingredient('Finely chopped onion', 1),
                new Ingredient('Garlic clove', 1),
                new Ingredient('400g can of chickpeas', 1),
                new Ingredient('Tsp of ground cumin', 1),
                new Ingredient('Tsp of ground coriander', 1),
                new Ingredient('Egg, beaten', 1),
                new Ingredient('Fresh parsley handful', 1),
                new Ingredient('Tbsps of olive oil', 2),
            ]),
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // returns a copy to prevent editing original from outside
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}