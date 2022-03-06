import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {FieldsetModule} from 'primeng/fieldset';
import { DataQualityComponent } from '../data-quality/data-quality.component';
import { MajorTasksComponent } from '../major-tasks/major-tasks.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { Part1Component } from '../part1/part1.component';

@NgModule({
  declarations: [RemoteEntryComponent, DataQualityComponent, MajorTasksComponent, Part1Component],
  imports: [
    CommonModule,
    FieldsetModule,
    TabMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: '',
            component: Part1Component,
            children: [
              {
                path: 'dataquality',
                component: DataQualityComponent,
                outlet: 'part1'
              },
              {
                path: 'majortasks',
                component: MajorTasksComponent,
                outlet: 'part1'
              },
            ]
          },
        ]  
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
