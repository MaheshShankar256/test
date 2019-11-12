import { Injectable } from '@angular/core';
import { Addcart} from './model/addtocart';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycartService {
  mycartCollection: AngularFirestoreCollection<Addcart>;
  mycarts: Observable<Addcart[]>;
  

  constructor(private afs:AngularFirestore) { 
    // this.mycarts = this.afs.collection('mycart').valueChanges();
  }
  getdata(){
    return this.mycarts;
  }
}
