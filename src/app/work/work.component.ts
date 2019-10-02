import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Subject } from 'rxjs';

import { WorksService } from './works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  works: any = null;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * 
   * @param {Title} titleService
   * @param {WorksService} _worksService
   */
  constructor(
    private titleService: Title,
    private _worksService: WorksService
  ) {
    this.titleService.setTitle("Work!!");

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // ---------------------
  // @ Lifecycle hooks
  // ---------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._worksService.getWorks()
      .then(data => {
        this.works = data;
        this._unsubscribeAll.complete();
      });
  }

}