import {Routes} from '@angular/router';
import {AdminComponent} from './routes/admin/admin.component';
import {HomeComponent} from './routes/home/home.component';
import {ActivateGuard} from './services/authGuard/activate.guard';
import { Component } from '@angular/core';
export const Approutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'admin', component:AdminComponent, canActivate:[ActivateGuard]},
]