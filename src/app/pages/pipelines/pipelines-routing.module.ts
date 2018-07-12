import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipelinesComponent } from './pipelines.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '',
  component: PipelinesComponent,
  children: [
    {
      path: 'list',
      component: ListComponent,
    }, {
      path: 'create',
      component: CreateComponent,
    }, {
      path: 'view',
      component: ViewComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelinesRoutingModule { }

export const routedComponents = [
  PipelinesComponent,
  ListComponent,
  CreateComponent,
  ViewComponent,
];
