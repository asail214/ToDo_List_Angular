import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AddComponent } from './components/add/add';
import { AboutComponent } from './components/about/about';
import { TodoListComponent } from './components/todo-list/todo-list';
import { EditComponent } from './components/edit/edit';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'edit/:id', component: EditComponent }

];
