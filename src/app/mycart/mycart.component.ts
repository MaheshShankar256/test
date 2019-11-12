import { Component, OnInit } from '@angular/core';
import { MycartService} from '../mycart.service'
 import {$ } from 'jquery';
<<<<<<< HEAD
=======
 import {OfficeEquipmentService} from '../office-equipment.service';
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  mycartdata: any[];
  deliveryNote:boolean;
  textarea: string;
  delivery: string;
  rents: any;
  count: number;
  totalrent: any;
  refundableamount: any;
  deliverycharge:any;
add: any;
  loyality: any;
  traces:any=[];
  checkouts: {};
  loyalityamount: string;
  promo: string;
  
<<<<<<< HEAD
  constructor(private mycartservice:MycartService) { }

  ngOnInit() {
  this.loyalityamount=''
    this.mycartservice.getdata()
=======
  constructor(private mycartservice:MycartService,private officeservice:OfficeEquipmentService,) { }

  ngOnInit() {
  this.loyalityamount=''
    this.officeservice.addItem()
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
    .subscribe((data)=>{
      console.log(data);
     this.mycartdata=data;
     console.log("mycarted data",this.mycartdata);
this.totalrent=this.mycartdata[0]['amount3'];
<<<<<<< HEAD
console.log(this.totalrent);
this.refundableamount=this.mycartdata[0]['amount'];
this.deliverycharge=this.mycartdata[0]['amount2'];
console.log(this.refundableamount);
this.add=this.mycartdata[0]['amount3'] + this.mycartdata[1]['amount3'];
console.log(this.add);
let total=0;
=======
this.refundableamount=this.mycartdata[0]['amount'];
this.deliverycharge=this.mycartdata[0]['amount3'];
console.log(this.totalrent);


>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
     for(i=0;i<=this.mycartdata.length;i++){
      this.count=this.mycartdata.length;
      console.log(this.count);
      this.rents=this.mycartdata[i]['amount3'];
      console.log(this.rents);
<<<<<<< HEAD
      // this.array=this.mycartdata[0]['amount3'];
      console.log(this.mycartdata[i]['amount3']); 
      if(isNaN(this.mycartdata[i]['amount3'])){
        continue;
      }
      total += Number(this.mycartdata[i]['amount3'])
      console.log(total);
  }
  return total
=======
     
      // total += Number(this.mycartdata[i]['amount3'])
      // console.log(total);
  }

>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
      })
      let i;
      this.traces=[{
        "name":"Cart","id":"1","red":"true","color":"green"},
        {"name":"Delivery Addess","id":"2"},
        {"name":"Payment Opations","id":"3"},
        {"name":"Order Confirmation","id":"4"}
        
      ]
  }
  deliveryNotes()
{
  if(this.deliveryNote  == false){
       this.delivery='delivery';
  }else{
    this.delivery='';
  }
  console.log(this.textarea)
  // document.getElementById('demo').innerHTML=<textarea rows="4" cols="50">;
}
// checkout(){
//   this.checkouts={
//    "loyality":this.loyality,
//   }
// }
checkout(loyality){
  if(loyality==true){
    this.loyalityamount='amount';
    document.getElementById('loyality').style.backgroundColor="green";
  }else{
    this.loyalityamount='';
  }
}
<<<<<<< HEAD
promocode(code){
  if(code==true){
    this.promo='amount';
    
  }else{
    this.promo='';
  }
  console.log(this.promo);
}
=======
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
}
