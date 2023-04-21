import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatGenderService {

  constructor() { }

  getGenderSpanish(gender: string): string {
    switch (gender) {
      case 'Male':
        return 'Hombre';
      case 'Female':
        return 'Mujer';
      default:
        return 'Desconocido';
    }
  }
}
