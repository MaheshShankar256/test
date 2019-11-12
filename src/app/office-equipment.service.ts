import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { office } from './model/office_equipment';
import {Addcart} from './model/addtocart'
import {Observable} from 'rxjs';
import {Macdetail} from './shared/macdetail.model';
import { Mycart} from './shared/mycart';

@Injectable({
  providedIn: 'root'
})
export class OfficeEquipmentService {
  officecollection:AngularFirestoreCollection<office>;
  officeeuipment:Observable<unknown[]>;

  addtocartcollection:AngularFirestoreCollection<Addcart>;
  addtocart:Observable<Addcart[]>;
  formData:Macdetail;
  mycarteuipment: Observable<unknown[]>;
  constructor(private afs:AngularFirestore) { 
    this.officeeuipment=this.afs.collection('images').valueChanges();
    this.mycarteuipment=this.afs.collection('mycartdata').valueChanges();
  }
  getequipments(){
    return this.officeeuipment;
  }
  addItem(){
    return this.mycarteuipment;
  }
}
