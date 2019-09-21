import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawer-side',
  templateUrl: './drawer-side.component.html',
  styleUrls: ['./drawer-side.component.css']
})
export class DrawerSideComponent implements OnInit {

  @Input() languages: string[];
  @Input() skills: string[];
  @Input() contacts: any[];

  constructor() { }

  ngOnInit() {
  }

}
