import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categories } from '../interfaces/categories';


@Injectable({ providedIn: 'root' })
export class ProductService {

  private categoriesUrl = 'https://run.mocky.io/v3/45dfdb8c-1379-45d7-8695-d2471e1494d7';  // URL to web api

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

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Categories> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Categories>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Categories>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Categories[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Categories[]>(`${this.categoriesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Categories[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Categories): Observable<Categories> {
    return this.http.post<Categories>(this.categoriesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Categories) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Categories>('addHero'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}
