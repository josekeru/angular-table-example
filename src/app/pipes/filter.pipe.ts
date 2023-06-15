import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car-model.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cars: Car[], searchText: string): Car[] {
    if (!cars || !searchText) {
      return cars;
    }

    searchText = searchText.toLowerCase();

    return cars.filter((car) => {
      return (
        car.name.toLowerCase().includes(searchText) ||
        car.city.toLowerCase().includes(searchText) ||
        car.carRegistration.toLowerCase().includes(searchText) ||
        car.carPower?.toString().includes(searchText)
      );
    });
  }
}
