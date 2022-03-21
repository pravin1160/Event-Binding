import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  changeText(){
    if(this.name == "Angular")
      this.name = "Internshala";
    else 
      this.name = "Angular";
  }
}
