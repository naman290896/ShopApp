import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: HttpClient) { }
  productId : any;
  itemArr: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.httpService.get('./assets/item.json').subscribe(
        data =>{
          this.itemArr = data as string;
          this.itemArr = this.itemArr.filter(item => item.id == this.productId);
        }
      )
    })
  }

}
