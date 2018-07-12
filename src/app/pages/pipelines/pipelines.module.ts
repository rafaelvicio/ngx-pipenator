import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PipelinesRoutingModule, routedComponents } from './pipelines-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    PipelinesRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents
  ]
})
export class PipelinesModule { }
