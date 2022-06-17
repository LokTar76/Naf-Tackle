
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient) {
        this.http = http;
        this.baseUrl = "https://bp1ri5fpu6.execute-api.us-east-2.amazonaws.com/default/EverStream_Email?";
    }

    sendTestEmail(): Observable<any> {
        const url = this.baseUrl + 'from=abc&message=This is a test message.';
        const headers = new HttpHeaders({ 'X-Api-Key': '2DBffVlrsd9anPHUq33qA6Z2KVMQlL0aou5IVJj1' });
        return this.http.get(url, { headers: headers });
    }

    sendEmail(from: string, message: string): Observable<any> {
        const url = this.baseUrl + 'from=' + from + '&message=' + message + '';
        const headers = new HttpHeaders({ 'X-Api-Key': '2DBffVlrsd9anPHUq33qA6Z2KVMQlL0aou5IVJj1' });
        return this.http.get(url, { headers: headers });
    }
}