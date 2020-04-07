import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonDisabled = true;

  constructor(){
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2500);
  }

  toggleServerStatus(){
    this.statusFlag = !this.statusFlag;

    if(this.statusFlag == true)
      this.ServerStatus = 'online';
    else
      this.ServerStatus = 'offline';

    return this.ServerStatus;
  }
}
