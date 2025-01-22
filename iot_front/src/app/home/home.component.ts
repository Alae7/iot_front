import {Component, OnInit} from '@angular/core';
import {WowService} from "../wow.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private wowService: WowService) { }

  ngOnInit(): void {
    this.wowService.init({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: true
    });
  }

}
