import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Office } from './model/office_equipment';
import {Addcart} from './model/addtocart'
import {Observable} from 'rxjs';
import {Macdetail} from './shared/macdetail.model';
import { Mycart} from './shared/mycart';

@Injectable({
  providedIn: 'root'
})
export class OfficeEquipmentService {
  officecollection:AngularFirestoreCollection<Office>;
  officeeuipment:Observable<Office>;

  // mycart:AngularFirestoreCollection<Mycart>;
  // mycart:Observable<Mycart>;

  addtocartcollection:AngularFirestoreCollection<Addcart>;
  addtocart:Observable<Addcart[]>;
  formData:Macdetail;
  constructor(private afs:AngularFirestore) { 
    // this.officeeuipment=this.afs.collection('images').valueChanges();
    // this.mycarteuipment=this.afs.collection('mycart').valueChanges();
    // this.officeeuipment= this.afs.collection('images').snapshotChanges().map(changes =>{
    //   return changes.map(a=>{
    //     const data = a.payload.doc.data() as Office;
    //     data.href= a.payload.doc.href;
    //     return data;
    //   })
    // })
  }
  getequipments(){
    return this.officeeuipment;
  }
  addItem(){
    return this.officeeuipment;
  }
}
