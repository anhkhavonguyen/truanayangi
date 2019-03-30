import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Food } from '../shared/interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private API = 'http://localhost:4000/food';

  constructor(private http: HttpClient) { }

  getFood(): Observable<any> {
    return this
      .http
      .get<any>(`${this.API}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getFoodDetails(id: number): Observable<Food> {
    return this
      .http
      .get<Food>(`${this.API}/${id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addFood(Food: Food): Observable<Food> {
    return this
      .http
      .post<Food>(`${this.API}`, Food)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateFood(Food: Food): Observable<Food> {
    return this
      .http
      .put<Food>(`${this.API}/update/${Food.id}`, Food)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  angi(): Observable<any> {
    return this
      .http
      .post<any>(`${this.API}/angi`, {})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }

}
