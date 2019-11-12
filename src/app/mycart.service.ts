import { Injectable } from '@angular/core';
import { Addcart} from './model/addtocart';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycartService {
  mycartCollection: AngularFirestoreCollection<Addcart>;
<<<<<<< HEAD
  mycarts: Observable<unknown[]>;
  

  constructor(private afs:AngularFirestore) { 
    this.mycarts = this.afs.collection('mycart').valueChanges();
=======
  mycarts: Observable<Addcart[]>;
  

  constructor(private afs:AngularFirestore) { 
    // this.mycarts = this.afs.collection('mycart').valueChanges();
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
  }
  getdata(){
    return this.mycarts;
  }
}
