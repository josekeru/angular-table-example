import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car-model.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getCar(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  updateCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Car>(url, car);
  }

  deleteCar(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
