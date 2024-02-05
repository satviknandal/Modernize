import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categories } from '../interfaces/categories';


@Injectable({ providedIn: 'root' })
export class ProductService {

  private categoriesUrl = 'https://mocki.io/v1/57aecb21-414c-44c3-8c59-1b8b87a53e94';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET product categories from the server */
  getProductCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.categoriesUrl)
      .pipe(
        tap(_ => this.log('fetched product Categories')),
        catchError(this.handleError<Categories[]>('getProductCategories', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    // add to a message service;
  }
}
