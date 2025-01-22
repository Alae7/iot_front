import {Component, OnInit} from '@angular/core';
import {WowService} from "./wow.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private wowService: WowService) { }

  ngOnInit(): void {
    this.wowService.init({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: true
    });
  }
  title = 'iot_front';
}
