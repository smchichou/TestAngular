import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
