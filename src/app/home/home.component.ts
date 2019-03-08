import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  constructor(private itemService: ItemService) { }
  
  ngOnInit() {
    this.itemService.getItemList().subscribe(res=>{
      this.items=res;
    });
    console.log(this.items);
  }

}
