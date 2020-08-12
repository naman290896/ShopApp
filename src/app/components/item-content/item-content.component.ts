import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  itemArr:any;
  ngOnInit() {
    this.httpService.get('./assets/item.json').subscribe(
      data =>{
        this.itemArr = data;
        console.log(this.itemArr);
      }
    )
  }

}
