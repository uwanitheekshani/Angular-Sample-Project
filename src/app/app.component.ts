import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  heading ='Hello to Angular';
 
  // count=0
  // counter(type:string){

  //   type==='add' ?this.count++:this.count--;

  // }

  constructor(private router: Router) {
  }

  clickButton(path: string) {
    this.router.navigate([path]);
} 
}
