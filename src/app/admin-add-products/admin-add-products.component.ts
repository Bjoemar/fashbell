import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CloudinaryUploader, CloudinaryOptions } from 'ng2-cloudinary';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})

export class AdminAddProductsComponent implements OnInit {

  url = '../../assets/images/uploadBG.png';
  productName = null;	
  productPrice = null;
  itemCategory = null;
  sizes = [];
  colors = [];
  tags = [];
  productImage =  null;
  thumb_add = '';
  thumb_add_cont = [];
  object_info: any; 
  object_thumb = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  	// console.log(this.productName,this.productPrice,this.productImage)
  }

  uploader1: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({
  	cloudName : 'dv5ki1m4h',
  	uploadPreset : 'fashbelle',
  }));


  uploader2: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({
    cloudName : 'dv5ki1m4h',
    uploadPreset : 'fashbelle',
  }));


  loading: any;

  submit() {

      this.loading = true;
      this.uploader2.uploadAll();

      this.uploader2.onSuccessItem = (item: any, response: string, status: number , header:any) : any => {
          const res: any = JSON.parse(response);
          this.object_thumb.push(res);
      }


      this.uploader2.onErrorItem = function(fileItem , response, status, headers) {
          console.log('onErrorItem',fileItem , response, status, headers)
      };



    	this.loading = true;
    	this.uploader1.uploadAll();
    	this.uploader1.onSuccessItem = (item: any, response: string, status: number , header:any) : any => {
    		const res: any = JSON.parse(response);
    		this.object_info = Object.assign({
    			'productName' : this.productName,
    			'productPrice' : this.productPrice,
    			'productImage' :res.public_id

    	  });


          const data = Object.assign({
              'object_info' : this.object_info ,
              'object_thumb' : this.object_thumb
          });

          console.log(data)


          this.http.post('/api/product/saveProduct',data).subscribe((data:any)=>{
              console.log('THE DATA HAS BEEN SAVE');
          },error => {
              console.log("THE HAS NOT BEEN SAVED");
          });
          
    	};

  		this.uploader1.onErrorItem = function(fileItem , response, status, headers) {
  			console.log('onErrorItem',fileItem , response, status, headers)

  		};





  }

  preview(image) {
    if (image.target.files && image.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(image.target.files[0]);

      reader.onload = (image) => {
        // this.url = image.target.result;
      }
    }
  }


  trigger_img() {
    document.getElementById("main_img_btn").click();
  }


  remove_main_img() {
    this.url = '../../assets/images/uploadBG.png';

  }


  thumbnail(image){

    if (image.target.files && image.target.files[0]) {
      console.log('JOEMAR')
      var reader = new FileReader();

      reader.readAsDataURL(image.target.files[0]);

      reader.onload = (image) => {
        // if (image.target.result) {
        //    // this.thumb_add = image.target.result;
        //    this.thumb_add_cont.push(this.thumb_add);
        // }

      }
    }

  }

  thumbnail_trigger() {
    document.getElementById("thumb_additional_img").click();
  }


}
