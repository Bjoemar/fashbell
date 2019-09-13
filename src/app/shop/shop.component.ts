import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // ShopItem = Array();
  // productModal: string = null;
  
  // constructor(private http: HttpClient , private router: Router) {
  // 		var secret = {'password' : 'fasbelle2019'};
	 //  	this.http.post('/api/getShopItem',secret).subscribe((data:any) => {
	 //  		this.ShopItem = data;
  //       console.log(this.ShopItem)       
	 //  	}, error => {
	 //  		console.log("BAD REQUEST")
	 //  	})
  // }

  ngOnInit() {
  }


  itemView(item) {
    // this.productModal = item;
  }

}
