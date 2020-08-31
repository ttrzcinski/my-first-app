import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daform',
  templateUrl: './daform.component.html',
  styleUrls: ['./daform.component.css']
})
export class DaformComponent implements OnInit {
	
  username = undefined;

  constructor() { 
    this.username = '';
  }

  ngOnInit(): void {
  }
  
  isSetUserName(): boolean {
	return this.username !== '';
  }
  
  resetUserName(): void {
	this.username = '';
  }

}
