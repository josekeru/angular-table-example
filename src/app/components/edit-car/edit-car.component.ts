import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car-model.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  @Output() isCloseEditCar = new EventEmitter<boolean>();
  @Input() carEdit: any;
  @Input() carTable: any;
  messageError: string = '';
  showMessageError: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  public editCar(carEdit: Car): void {
    this.carService.updateCar(carEdit).subscribe(() => {
      this.isCloseEditCar.emit(false);
    });
  }
  
  public filterData(valor: string) {
    const carTable = [...this.carTable]
    const newCarCreated  = carTable.find(element => element.carRegistration === valor && element.id !== this.carEdit.id);
    debugger;
    if (newCarCreated) {
      this.showMessageError = true;
      this.messageError = 'Ya hay un vehículo registrado con esa matrícula, porfavor revise e ingrese otra matrícula nueva válida';
    } else {
      this.showMessageError = false;
    }
  }

  public cancelModal() {
    this.isCloseEditCar.emit(false);
  }

}
