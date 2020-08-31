import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	shown: boolean;
	logged = []
	secretPass = 'some secret pass'
	
	constructor() {
		this.shown = false;
	}
	
	logDown(index: number, caption: string) {
		this.logged.push({'index': index, 'caption': caption});
	}
	
	ToggleDetails() {
		console.log('Will toggle');
		var the_text = this.shown ? 
			"Hide the secret." : 
			"Shown the secret.";
		this.logDown(this.logged.length, the_text);
		this.shown = !this.shown;
	}
	
	getCaption() {
		return this.isShown() ? 'Hide Details' : "Display Details";
	}
	
	isShown(): boolean {
		return this.shown === true;
	}
}