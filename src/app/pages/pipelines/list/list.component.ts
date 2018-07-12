import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { HeroButtonComponent } from '../../ui-features/buttons/hero-buttons/hero-buttons.component';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class ListComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'System',
        type: 'string',
      },
      lastName: {
        title: 'Emergency',
        type: 'string',
      },
      username: {
        title: 'Developer',
        type: 'string',
      },
      buton: {
        title: 'Button',
        type: 'html',
        
        filter: false,

      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
