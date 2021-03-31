import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Beautiful Bread', 'This is just a test', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
    new Recipe('Fabulous Falafel', 'This is just a test', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
