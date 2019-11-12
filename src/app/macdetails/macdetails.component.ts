import { Component, OnInit , Output  } from '@angular/core';
import {OfficeEquipmentService} from '../office-equipment.service';
import swal from 'sweetalert2'
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { DateRangePicker } from '@syncfusion/ej2-calendars';


@Component({
  selector: 'app-macdetails',
  templateUrl: './macdetails.component.html',
  styleUrls: ['./macdetails.component.css']
})
export class MacdetailsComponent implements OnInit {
  images: any[];
  macbook: boolean;
  refrigerator: boolean;
  createcart: any = {};
  quantity: number;
  age: object[];
  rentamount: any;
  deliveryamount: any;
  refundamount: any;

  i:any;added: boolean;
  cart: string;
  value:number=1;
  boyfriend:number;
  public n : number = 1;
  public date: Object = new Date();
  constructor(private officeservice:OfficeEquipmentService,
              private firestore:AngularFirestore,
              ) { 
   
  }

  ngOnInit() {

    this.officeservice.getequipments()
    .subscribe((data)=>{
      console.log(data);
      this.images=data;
      console.log('images',this.images);
      if(this.images[0].name ==='Macbook Pro 16GB RAM'){
        this.macbook=true;
      }else if (this.images[0].name !=='Macbook Pro 16GB RAM'){
  this.macbook=false;
}
console.log(this.macbook);
    
    })


  }
  addedtocart(){
    swal.fire({
      title: "Added To Cart",
      text: "",
      type: "success",
      confirmButtonColor: "#f69321",
      confirmButtonText: "OK"
    })
 console.log(this.cart);
  }
  
  incrementValue(){
    var mod = 1;
    var value = +(<HTMLInputElement>document.getElementById('number')).value;
    
    value += mod;
    (<HTMLInputElement>document.getElementById('number')).value = value.toString();
    
    
}

decrementValue()
{
  var mod = 1;
  var value = +(<HTMLInputElement>document.getElementById('number')).value;
  value -= mod;
  
  (<HTMLInputElement>document.getElementById('number')).value = value.toString(); 
    
   
}
  resetForm(form?:NgForm){
    form.resetForm();
    if(form != null)
    this.officeservice.formData = {
      id:null,
      quantity:'',
    rent:'',
    reAmount:'',
    deAmount:'',
      
    }
   
  }
  addtocart(form:NgForm){
    this.createcart={
      "Quantity":this.officeservice.formData.quantity,
      "Rent":this.officeservice.formData.rent,
      "ReAmount":this.officeservice.formData.reAmount,
  
      "DeAmount":this.officeservice.formData.deAmount
    }
    let data=form.value;
  this.officeservice.addItem();
  this.firestore.collection('addedtocart').add(data);
  this.resetForm(form);
  }
  
}
