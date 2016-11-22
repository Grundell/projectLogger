import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AddProjectComponent } from './add-project/add-project.component'
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component'
import { SingleProjectComponent } from './single-project/single-project.component'

const APP_ROUTES : Routes = [
  {
    path : '',
    component: AppComponent
  },
  {
    path : 'add-project',
    component : AddProjectComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'project/:id',
    component: SingleProjectComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES);
