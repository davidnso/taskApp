import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import {CategoriesComponent} from "./categories/categories.component";



const routes: Routes = [
  {
    path:'',
    component: TasksComponent
  },
  {
    path:'',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
