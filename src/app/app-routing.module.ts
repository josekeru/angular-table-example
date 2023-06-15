import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCarComponent } from './components/table-car/table-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: TableCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
