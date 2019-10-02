import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class WorksService implements Resolve<any> {
    works: any[];
    onWorksChanged: BehaviorSubject<any>;

    /**
     * Constructor
     * 
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onWorksChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     * 
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getWorks()
            ]).then(
                () => {
                    resolve();
                },
                reject
            )
        });
    }

    /**
     * Get works
     * 
     * @returns {Promise<any>}
     */
    getWorks(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/work')
                .subscribe((response: any) => {
                    this.works = response;
                    this.onWorksChanged.next(this.works);
                    resolve(response);
                }, reject);
        });
    }
}