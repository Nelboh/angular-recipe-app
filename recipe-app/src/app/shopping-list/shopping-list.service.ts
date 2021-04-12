import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 10),
        new Ingredient ('Breadsticks', 62),
    ];

    getIngredients() {
        return this.ingredients.slice(); 
        // ...makes a copy so original can't be modified
        // removing slice would let you add ingredients to the original list
        
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}