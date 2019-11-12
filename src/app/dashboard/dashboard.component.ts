import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
sidenavs:any=[];
equipment:boolean;
kids:boolean;
images:any=[];
  order: string;
  constructor() {
    
   }

  ngOnInit() {
    this.order='';
    this.sidenavs=[
      {"name":"Tools on Rent","displayname":"Tools on Rent",},
      {"name":"Medical Supplies","displayname":"Tools on Rent"},
      {"name":"Office Equipment","displayname":"Tools on Rent"},
      {"name":"Kids costume","displayname":"Tools on Rent"},
      {"name":"Event Rentals","displayname":"Tools on Rent"},
      {"name":"Apparel & Jewellery","displayname":"Tools on Rent"},
    ];
    this.images=[
      { "href":"../assets/images/refrigerator.jpg","name":"Single Door Refrigerator-190 liters only","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","order":"","path":"/details","productname":"Sports & Game","id":"demo1"},
      { "href":"../assets/images/macbook.jpg","name":"Macbook Pro 16GB RAM","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","fa":"fa fa-check-circle","order":"Bulk Order available","path":"/details","productname":"Laptops & Accessories","id":"demo2"},
      { "href":"../assets/images/refrigerator.jpg","name":"Single Door Refrigerator-190 liters only","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","order":"","path":"/details","productname":"Rikes on Rent","id":"demo3"},
      { "href":"../assets/images/macbook.jpg","name":"Macbook Pro 8GB RAM","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","fa":"fa fa-check-circle","order":"Bulk Order available","productname":"Laptops & Accessories","id":"demo4"},
]
 this.order=this.images[0].order;
 console.log(this.order);
  }
  office(){
     if(this.sidenavs[2].name === "Office Equipment"){
       console.log(this.sidenavs[2].name);
       this.equipment=true;
  }else if (this.sidenavs[2].name !== "Office Equipment"){
    console.log(this.sidenavs[2].name);
    this.equipment=false;
  }
  console.log(this.equipment);
}
gotoview(){
  if(this.sidenavs[3].name ==="Kids costume"){
    console.log(this.sidenavs[3].name);
    this.kids=true;
}
else{
 this.kids=false;
}
console.log(this.kids);
}

}
