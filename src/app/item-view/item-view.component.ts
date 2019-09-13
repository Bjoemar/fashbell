import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  @Input() productModal: any;
  
  // @Input() TESTDATA: string;
  // @Output() itemView = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }


  // productObject = {
  //   'productImage' :  productModal.productImage,
  //   'productName' : productModal.productName,
  //   'productPrice' :  productModal.productPrice,
  // }


  upCase(test) {
    alert(test)
  }




}
