import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  activeTab: string = 'Dashboard'; // Default active tab

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  logout() {
    localStorage.removeItem('user');  // Clear user data from localStorage
    this.router.navigate(['/login']); // Redirect to login page
  }

}
