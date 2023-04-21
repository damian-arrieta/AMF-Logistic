import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatStatusService {

  constructor() { }

  getStatusSpanish(status: string): string {
    switch (status) {
      case 'Alive':
        return 'Vive';
      case 'Dead':
        return 'Muerto';
      default:
        return 'Desconocido';
    }
  }
}
