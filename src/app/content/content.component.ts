import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  count=0
  counter(type:string){

    type==='add' ?this.count++:this.count--;

  }
}
