import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfficeEquipmentComponent } from './office-equipment/office-equipment.component';
import { MacdetailsComponent } from './macdetails/macdetails.component';
import { MycartComponent } from './mycart/mycart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'details', component: MacdetailsComponent },
  { path: 'mycart', component: MycartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'office', component: OfficeEquipmentComponent },
  { path: '',redirectTo:'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, 
  children: [
  { path: 'office', component: OfficeEquipmentComponent },
  // { path: 'details', component: MacdetailsComponent },
  // { path: 'mycart', component: MycartComponent },
  // { path: 'order', component: OrderComponent },
  ]}
 ] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
