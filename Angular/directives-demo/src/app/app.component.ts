import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = true;

  toggleFlag(){
    this.flag = !this.flag;
    return this.flag;
  }

  getColor(){
    if(this.flag == true)
      return 'green';
    else
      return 'red';
  }


  studentRoster = ['Arya', 'Rohit', 'Upasana'];
  currentName = '';

  add(){
    this.studentRoster.push(this.currentName);
  }
}
