import { Component, OnInit } from '@angular/core';
import { MycartService} from '../mycart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  mycartdata: any=[];
  traces:any=[];
  constructor(private mycartservice:MycartService) { }

  ngOnInit() {
    this.mycartservice.getdata()
    .subscribe((data)=>{
      console.log(data);
     this.mycartdata=data;
     console.log("mycarted data",this.mycartdata);
  })
  
  this.traces=[{
    "name":"Cart","id":"1"},
    {"name":"Delivery Addess","id":"2"},
    {"name":"Payment Opations","id":"3"},
    {"name":"Order Confirmation","id":"4"}
    
  ]
  
}
calculateClasses(){
  return{
  'color':'red'
  }

}
}
