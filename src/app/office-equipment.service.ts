import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
<<<<<<< HEAD
import { Office } from './model/office_equipment';
=======
import { office } from './model/office_equipment';
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
import {Addcart} from './model/addtocart'
import {Observable} from 'rxjs';
import {Macdetail} from './shared/macdetail.model';
import { Mycart} from './shared/mycart';

@Injectable({
  providedIn: 'root'
})
export class OfficeEquipmentService {
<<<<<<< HEAD
  officecollection:AngularFirestoreCollection<Office>;
  officeeuipment:Observable<Office>;

  // mycart:AngularFirestoreCollection<Mycart>;
  // mycart:Observable<Mycart>;
=======
  officecollection:AngularFirestoreCollection<office>;
  officeeuipment:Observable<unknown[]>;
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af

  addtocartcollection:AngularFirestoreCollection<Addcart>;
  addtocart:Observable<Addcart[]>;
  formData:Macdetail;
<<<<<<< HEAD
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
=======
  mycarteuipment: Observable<unknown[]>;
  constructor(private afs:AngularFirestore) { 
    this.officeeuipment=this.afs.collection('images').valueChanges();
    this.mycarteuipment=this.afs.collection('mycartdata').valueChanges();
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
  }
  getequipments(){
    return this.officeeuipment;
  }
  addItem(){
<<<<<<< HEAD
    return this.officeeuipment;
=======
    return this.mycarteuipment;
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
  }
}
