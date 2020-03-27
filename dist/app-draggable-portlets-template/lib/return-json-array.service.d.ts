import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class ReturnJsonArrayService {
    private http;
    constructor(http: HttpClient);
    getScreen(url: string): Observable<any>;
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError;
}
