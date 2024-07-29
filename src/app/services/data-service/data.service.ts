import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  saveBankInfo(data: any): Observable<any> {
    // Simulación de un POST a un servidor con un delay para emular la latencia de red
    console.log('Simulación de envío de datos al servidor:', data);
    return of({ success: true, message: 'Información Bancaria guardada exitosamente' }).pipe(
      delay(2000) // Simula un retraso de 2 segundos
    );
  }
}
