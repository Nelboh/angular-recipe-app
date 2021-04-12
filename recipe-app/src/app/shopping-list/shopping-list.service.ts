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

    addIngredient(ingredient: Ingredient, publishChanges = true) {
        const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
        if (index === -1) {
            this.ingredients.push(ingredient);
        } else {
            this.ingredients[index].amount += ingredient.amount;
        }

        if (publishChanges) {
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
    }

    // addIngredients(ingredients: Ingredient[]) {
        // The below works fine, but causes a lot of unnecessary event emissions when there are lots of ingredients
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient);
    //     }
    // }

    // addIngredients(ingredients: Ingredient[]) {
    //     // Using the spread operator (...) lets us get each ingredient from the array rather than the whole array as a single object
    //     this.ingredients.push(...ingredients);
    //     this.ingredientsChanged.emit(this.ingredients.slice());
    // }

    addIngredients(ingredients: Ingredient[]) {
        ingredients.forEach(ing => this.addIngredient(ing, false));
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}