import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car-model.model';
import { CarService } from 'src/app/service/car.service';


@Component({
  selector: 'app-table-car',
  templateUrl: './table-car.component.html',
  styleUrls: ['./table-car.component.scss']
})
export class TableCarComponent implements OnInit {
  car$: Observable<Car[]> | undefined;
  searchText: string = '';
  openModalCreate: boolean = false;
  openModalEdit: boolean = false;
  openModalDetail: boolean = false;
  carEdit;
  carTable;
  carSelected;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCar();
  }

  public loadCar(): void {
    this.car$ = this.carService.getCar();
    this.car$.subscribe((res) => {
      this.carTable = res;
    });
  }

  public updateNewCar(e): void {
    debugger;
    this.carService.createCar(e).subscribe(() => {
      this.loadCar();
    });
  }

  public deleteCar(id: number): void {
    this.carService.deleteCar(id).subscribe(() => {
      this.loadCar();
    });
  }

  public openDetail(car) {
    this.carSelected = car;
    this.openModalDetail = !this.openModalDetail;
  }

  public openModalC() {
    this.openModalCreate = !this.openModalCreate;
  }

  public openModalE(car) {
    this.openModalEdit = !this.openModalEdit;
    this.carEdit = car;
  }

  public updateCloseDetailCar(e) {
    this.openModalDetail = false;
  }

  public updateCloseEditCar(e) {
    this.openModalEdit = false;
  }

  public updateCloseNewCar(e) {
    this.openModalCreate = false;
  }
}
