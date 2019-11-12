import { Component, OnInit } from '@angular/core';
import {OfficeEquipmentService} from '../office-equipment.service';

@Component({
  selector: 'app-office-equipment',
  templateUrl: './office-equipment.component.html',
  styleUrls: ['./office-equipment.component.css']
})
export class OfficeEquipmentComponent implements OnInit {
  images:any=[];
  deliveryNote:boolean;

  constructor(private officeservice:OfficeEquipmentService) { 
    this.images.order='';
  }

  ngOnInit() {
    this.images=[
      { "href":"../assets/images/refrigerator.jpg","name":"Single Door Refrigerator-190 liters only","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","order":"","path":"/details"},
      { "href":"../assets/images/macbook.jpg","name":"Macbook Pro 16GB RAM","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","fa":"fa fa-check-circle","order":"Bulk Order available","path":"/details"},
      { "href":"../assets/images/refrigerator.jpg","name":"Single Door Refrigerator-190 liters only","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","order":"","path":"/details"},
      { "href":"../assets/images/macbook.jpg","name":"Macbook Pro 8GB RAM","displayname":"single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling with fast and efective cooling system to keep your food fresh available on rent in Banglore","fa":"fa fa-check-circle","order":"Bulk Order available"},
]
this.officeservice.getequipments().subscribe((data)=>{
console.log(data)
this.images=data;
console.log('images',this.images)
})

  }
  // deliveryNotes(){
  //   if(this.deliveryNote == "true"){
  //      this.
  //   }
  // }
}
