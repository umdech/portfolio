import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class WorkService implements Resolve<any>
{
    routeParams: any;
    work: any;
    onWorkChanged: BehaviorSubject<any>;
    /**
         * Constructor
         *
         * @param {HttpClient} _httpClient
         */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onWorkChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWork()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get work
     * 
     * @return {Promise<any>}
     */
    getWork(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/work/' + this.routeParams.id)
                .subscribe((response: any) => {
                    this.work = response;
                    this.onWorkChanged.next(this.work);
                    resolve(response);
                }, reject);
        });
    }
}