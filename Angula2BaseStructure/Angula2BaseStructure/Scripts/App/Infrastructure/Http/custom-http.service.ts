import {Injectable} from "@angular/core";
import {Http, Response, ResponseOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable"
import {Observer} from "rxjs/Observer"

import {Dictionary} from "../DataStructures/Dictionary";

@Injectable()
export class CustomHttpService {
    constructor(private http: Http) {
    }

    private subscriptions = new Array<(error) => void>();
    subscribeErrorHandler(errorHandler: (error) => void) {
        if (this.subscriptions.find((e) => e === errorHandler) == undefined) {
            this.subscriptions.push(errorHandler);
        }
    }

    unsubscribe(errorHandler: (error) => void) {
        this.subscriptions.splice(this.subscriptions.indexOf(errorHandler), 1);
    }

    private onNext(request: Observable<Response>, response: Response) {
        this.activeRequests.get(request).next(response);
    }

    private onError(request: Observable<Response>, error: any) {
        const err = error.json();
        for (let handler of this.subscriptions) {
            handler(err);
        }
        this.activeRequests.get(request).error(error);
    }

    private onComplete(request: Observable<Response>) {
        this.activeRequests.get(request).complete();
        this.activeRequests.remove(request);
    }

    private activeRequests = new Dictionary<Observable<Response>, Observer<Response>>();
    private generateObservable(request: Observable<Response>): Observable<Response> {
        request.subscribe((response) => this.onNext(request, response), (error) => this.onError(request, error), () => this.onComplete(request));
        return new Observable<Response>((subscriber: Observer<Response>) => {
            this.activeRequests.add(request, subscriber);
        });
    }



    get(url: string, options?: ResponseOptionsArgs): Observable<Response> {
        return this.generateObservable(this.http.get(url, options));
    }

    post(url: string, body: any, options?: ResponseOptionsArgs): Observable<Response> {
        return this.generateObservable(this.http.post(url, body, options));
    }

    put(url: string, body: any, options?: ResponseOptionsArgs): Observable<Response> {
        return this.generateObservable(this.http.put(url, body, options));
    }

    delete(url: string, options?: ResponseOptionsArgs): Observable<Response> {
        return this.generateObservable(this.http.delete(url, options));
    }
}