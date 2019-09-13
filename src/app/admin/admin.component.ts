import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }



  // selectedFile: File = null;

  // onFileSelect(event) {
  // 	this.selectedFile = event.target.files[0];
  // }
  
  // uploader: CloudinaryUploader = new CloudinaryUploader( new CloudinaryOptions({cloudName : 'dv5ki1m4h', uploadPreset: 'fashbelle'}));



  // loading: any;

  // upload() {
  // 	this.loading = true;
  // 	this.uploader.uploadAll();

  // 	this.uploader.onSuccessItem = (item: any, response: string, status: number, header: any) : any => {
  // 		const res: any = JSON.parse(response);

  // 		console.log(res)
  // 	}

  // 	this.uploader.onErrorItem = function(fileItem , response, status, headers) {
  // 		console.log('onErrorItem',fileItem , response, status, headers)

  // 	};


  // };
  // onUpload(){
  // 	this.http.post('')
  // }

}
