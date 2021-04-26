import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-demo';

  constructor(

  ) {

  }
  width = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;



  }


  showForm: boolean = false;
  signUp: boolean = true;

  showHide() {
    this.showForm = !this.showForm
    console.log('clicked');


  }

  toggleForm() {
    this.signUp = !this.signUp;
  }

}
