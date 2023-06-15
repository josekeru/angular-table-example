import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.scss']
})
export class DetailCarComponent implements OnInit {
  @Output() isCloseDetailCar = new EventEmitter<boolean>();
  @Input() carSelected: any;
  @Input() carTable: any;

  constructor() { }

  ngOnInit(): void {
  }

  public sortBy(column: string): void {
    this.carTable.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

  public cancelDetail() {
    this.isCloseDetailCar.emit(false);
  }

}
