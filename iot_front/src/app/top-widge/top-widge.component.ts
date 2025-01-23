import {Component, OnInit} from '@angular/core';
import {
  faHeartPulse, faWeightScale, faHeartBroken, faCalendarDay, faHeartCirclePlus, faHeartCircleMinus,
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
  heart_max = faHeartCirclePlus;
  heart_min = faHeartCircleMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
