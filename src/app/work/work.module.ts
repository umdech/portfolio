import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { WorkComponent } from './work.component';
import { DetailComponent } from './detail/detail.component';

import { WorksService } from './works.service';
import { WorkService } from './work.service';

const routes = [
  {
    path: '',
    component: WorkComponent,
    resolve: {
      data: WorksService
    }
  },
  {
    path: ':id',
    component: DetailComponent,
    resolve: {
      data: WorkService
    }
  }
];

@NgModule({
  declarations: [
    WorkComponent,
    DetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forChild(routes),

    CommonModule,

    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [
    WorksService,
    WorkService
  ]
})
export class WorkModule { }
