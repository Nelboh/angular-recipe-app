import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Beautiful Bread', 'This is just a test', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
        new Recipe('Fabulous Falafel', 'This is just a test', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice(); // returns a copy to prevent editing original from outside
    }
}