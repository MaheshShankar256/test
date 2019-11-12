import { Component, OnInit } from '@angular/core';
import {OfficeEquipmentService} from '../office-equipment.service';
import $ from "jquery";
import swal from 'sweetalert2'
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Addcart } from "../model/addtocart"
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
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
  value:number;
  i:any;added: boolean;
  cart: string;
;
  //  daterangepicker: DateRangePicker = new DateRangePicker({
  //   created: this.onCreate
  // });
  public date: Object = new Date();
  // public date=moment();
  // public daysArr;
  constructor(private officeservice:OfficeEquipmentService,
              private firestore:AngularFirestore,
               private toastr: ToastrService,) { 
   
  }

  ngOnInit() {
//     this.resetForm(); 
//     this.age=[
//       {"name":"1-2Years"},
//       {"name":"2-3Years"},
//       {"name":"3-4Years"},
//       {"name":"4-5Years"},
//       {"name":"5-6Years"},
//       {"name":"6-7Years"},
//       {"name":"7-8Years"},
//     ]
//     this.officeservice.getequipments().subscribe((data)=>{
//       console.log(data)
//       this.images=data;
//       console.log('images',this.images);
//       if(this.images[0].name ==='Macbook Pro 16GB RAM'){
//         this.macbook=true;
//       }else if (this.images[0].name !=='Macbook Pro 16GB RAM'){
//   this.macbook=false;
// }
// console.log(this.macbook);
    
//     })
// $(mahesh).datepick();
// $(.mahesh).datepick({dateFormat: 'yyyy-mm-dd'});
// var dates = $(.mahesh).datepick('getDate');

  }
  public createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });

    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }
  
  // onCreate(args) {
  //   (this.daterangepicker as any).isMobile = true;
  // }
  createCalender(month){
   let firstDay=moment(month).startOf('M');
   let days=Array.apply(null,{length:month.daysInMonth()+1})
   .map(Number.call,Number)
   return days;


  }
  ngAfterViewInit() {
    $(function() {

      $('input[name="datefilter"]').daterangepicker({
          autoUpdateInput: false,
          locale: {
              cancelLabel: 'Clear'
          }
      });
    
      $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
          $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
      });
    
      $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
          $(this).val('');
      });
    
    });
  }
  addedtocart(){
 this.toastr.success('gfvhgv');
    if(this.added  == false){
     this.cart='';
 }else{
  this.toastr.error('', 'Addedtocart', {
    timeOut: 3000
  });
 }
 console.log(this.cart);
  }
  incrementValue(){
  //  i=document.getElementById('number').innerHTML;
  //  i++;
  //  let i;
  document.getElementById('number').innerHTML= foo;
    var value =  parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
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
  quantityadd(i){
    ++i;
    document.getElementById('inc').value=i;
    // var $qtyplus = document.querySelector('.increment-btn');
    // var $qty = document.querySelector('.counter');
    // $qtyplus.addEventListener('click', function(){
    //   $qty.value = parseInt($qty.value) + 1; // `parseInt` converts the `value` from a string to a number
    // }, false);
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
