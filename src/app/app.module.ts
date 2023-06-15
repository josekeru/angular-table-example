import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { CarService } from 'src/app/service/car.service';
import { AppRoutingModule } from './app-routing.module';
import { TableCarComponent } from './components/table-car/table-car.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { DetailCarComponent } from './components/detail-car/detail-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

@NgModule({
  declarations: [AppComponent, TableCarComponent, FilterPipe, DetailCarComponent, EditCarComponent, NewCarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
