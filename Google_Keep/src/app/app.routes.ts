import { Routes } from '@angular/router';
import { App } from './app';
import { Editnote } from './editnote/editnote';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'edit-note', component: Editnote, title: 'Edit Note' },
  { path: '**', redirectTo: '' },
  { path: 'notfound', component: Notfound, title: 'page 404' },
  { path: 'signin', component: Signin, title: 'sign In Page' },
  { path: 'sign up', component: Signup, title: 'sign up page' }  
];
