import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { DataUser } from './components/data-user/data-user';
import { Variables } from './components/variables/variables';
import { Notfound } from './components/notfound/notfound';
import { Controlflux } from './components/controlflux/controlflux';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { GetApi } from './components/get-api/get-api';
import { ServiceTest } from './components/service-test/service-test';
import { EmployeeCrud } from './components/employee-crud/employee-crud';

export const routes: Routes = [
// route path for default page
  {
    path: '',
    redirectTo: 'variables',
    pathMatch: 'full'
  },

  {
    path: 'databinding',
    component: DataBinding

  },
  {
    path: 'signal',
    component: SignalComponent
  },
  {
    path: 'datauser',
    component: DataUser
  },
  {
    path: 'variables',
    component: Variables
  },
  {
    path: 'controlflux',
    component: Controlflux
  },
  {
    path:'dynamic-css-class',
    component: DynamicCssClass
  },

  {
    path:'users',
    component: UserMaster
  },
  {
    path:'reactive-users',
    component: ReactiveUser
  },
  {
    path:'get-api',
    component: GetApi
  },
  {
    path:'employee-crud',
    component: EmployeeCrud
  },
  {
    path:'service-test',
    component: ServiceTest
  },
  {
    // route path for not found page
    path: '**',
    component: Notfound
  }

];
