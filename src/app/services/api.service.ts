import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_BASE_URL = 'http://127.0.0.1:5000/'; // Cambiar por tu URL base

  constructor(private http: HttpClient) {}

  // Método GET genérico
  get<T>(path: string, options = {}): Observable<T> {
    return this.http.get<T>(`${this.API_BASE_URL}${path}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Método POST genérico
  post<T>(path: string, body: any, options = {}): Observable<T> {
    return this.http.post<T>(`${this.API_BASE_URL}${path}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  // Método PUT genérico
  put<T>(path: string, body: any, options = {}): Observable<T> {
    return this.http.put<T>(`${this.API_BASE_URL}${path}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  // Método DELETE genérico
  delete<T>(path: string, options = {}): Observable<T> {
    return this.http.delete<T>(`${this.API_BASE_URL}${path}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => new Error(error.message || 'Error desconocido'));
  }
}
