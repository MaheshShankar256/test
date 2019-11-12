import { Component, OnInit } from '@angular/core';
import { MycartService} from '../mycart.service'
 import {$ } from 'jquery';
 import {OfficeEquipmentService} from '../office-equipment.service';
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
  
  constructor(private mycartservice:MycartService,private officeservice:OfficeEquipmentService,) { }

  ngOnInit() {
  this.loyalityamount=''
    this.officeservice.addItem()
    .subscribe((data)=>{
      console.log(data);
     this.mycartdata=data;
     console.log("mycarted data",this.mycartdata);
this.totalrent=this.mycartdata[0]['amount3'];
this.refundableamount=this.mycartdata[0]['amount'];
this.deliverycharge=this.mycartdata[0]['amount3'];
console.log(this.totalrent);


     for(i=0;i<=this.mycartdata.length;i++){
      this.count=this.mycartdata.length;
      console.log(this.count);
      this.rents=this.mycartdata[i]['amount3'];
      console.log(this.rents);
     
      // total += Number(this.mycartdata[i]['amount3'])
      // console.log(total);
  }

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
}
