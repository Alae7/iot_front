import {Component, OnInit} from '@angular/core';
import {
  faHeartPulse, faWeightScale, faHeartBroken, faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widge',
  templateUrl: './top-widge.component.html',
  styleUrl: './top-widge.component.css'
})
export class TopWidgeComponent implements OnInit {

  heart = faHeartPulse;
  wieght = faWeightScale;
  heartch = faHeartBroken;
  age = faCalendarDay;

  constructor() { }

  ngOnInit(): void {
  }

}
