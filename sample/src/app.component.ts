import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private open:BehaviorSubject<boolean> = new BehaviorSubject(true);

  private output(log) {
    console.log(log);
  }

}
