import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private http: HttpClient ) { }

  searchCharacters(query = '', page = 1):Observable<Character[]> {
    const filter = `${environment.UrlApi}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }  

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.UrlApi}/${id}`)
    .pipe(catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    }));
  }
}
