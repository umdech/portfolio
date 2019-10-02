import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

import { WorkService } from '../work.service';
import { Work } from '../work.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  work: Work;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * 
   * @param {WorkService} _workService
   * @param {Title} titleService
   */
  constructor(
    private _workService: WorkService,
    private titleService: Title
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._workService.onWorkChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(work => {
        this.work = new Work(work);
        this.titleService.setTitle(this.work.title);
      });
  }

  /**
  * On destroy
  */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
