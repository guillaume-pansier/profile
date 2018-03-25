import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.navLinks = [
    {label: 'Welcome', path: 'welcome'},
    {label: 'About me', path: 'aboutme'},
    {label: 'Interests', path: 'interests'},
    {label: 'Playground', path: 'playground'}
  ];

  }

  ngOnInit() {
  }

}
