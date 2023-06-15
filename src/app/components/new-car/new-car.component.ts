import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car-model.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  @Output() isCloseNewCar = new EventEmitter<boolean>();
  @Output() dataCarNew = new EventEmitter();
  @Input() carTable: any;
  newCar: Car = { id: null, name: '', city: '', carRegistration: '', carPower: null };
  messageError: string = '';
  showMessageError: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.newCar = {
      id: null,
      name: '',
      city: '',
      carRegistration: '',
      carPower: null,
      color: '',
      style: '',
      year: null
    };
  }

  public cancelModal() {
    this.isCloseNewCar.emit(false);
  }

  public filterData(valor: string) {
    const carTable = [...this.carTable]
    const newCarCreated  = carTable.find(element => element.carRegistration === valor);
    if (newCarCreated) {
      this.showMessageError = true;
      this.messageError = 'Ya hay un vehículo registrado con esa matrícula, porfavor revise e ingrese otra matrícula nueva válida';
    } else {
      this.showMessageError = false;
    }
  }

  public createCar(): void {
    const newCarCreated = this.carTable.find((element) => element.carRegistration === this.newCar.carRegistration);
    if (newCarCreated) {
      this.showMessageError = true;
      this.messageError = 'Ya hay un vehículo registrado con esa matrícula, porfavor revise e ingrese otra matrícula nueva válida';
    } else {
      this.showMessageError = false;
      this.dataCarNew.emit(this.newCar);
      this.isCloseNewCar.emit(false);
    }
  }

}
