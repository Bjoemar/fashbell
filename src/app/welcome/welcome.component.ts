import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

guid;
  
 
  constructor(private http: HttpClient, private router: Router) {
  		// this.http.get('/api/preview').subscribe((data:any) => {
  		// 	console.log( data.guid)
  		// 	this.guid = data.guid;
  		// },error => {
  		// 	console.log("THERE WAS A SHIT");
  		// })
  }

  // runTest(){
  // 	this.http.get('/api/joemar').subscribe((data:any) => {
  // 		console.log( data.guid)
  // 		this.guid = data.guid;
  // 	},error => {
  // 		console.log("THERE WAS A SHIT");
  // 	})
  // 	alert(this.guid)
  // }

  ngOnInit() {
  	
  }


  // runTest() {
  //   const  data = Object.assign({'data':  'shitnizz'});
  //   this.http.post('/api/preview',data).subscribe((data:any) => {
  //       console.log( data.guid)
  //       this.guid = data.guid;
  //     },error => {
  //       console.log("THERE WAS A SHIT");
  //     })
  // }
}
