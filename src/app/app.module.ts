import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfficeEquipmentComponent } from './office-equipment/office-equipment.component';
import { MacdetailsComponent } from './macdetails/macdetails.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import {OfficeEquipmentService} from './office-equipment.service';
import { MycartComponent } from './mycart/mycart.component';
import { OrderComponent } from './order/order.component';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OfficeEquipmentComponent,
    MacdetailsComponent,
    MycartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'net'),
    AngularFirestoreModule,
    FormsModule,
    DateRangePickerModule,
    Ng2SearchPipeModule,
  ],
  providers: [OfficeEquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
