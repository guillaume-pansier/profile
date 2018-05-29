import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country/country';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export const STYLE_CLASS_NORMAL = 'landxx';
export const STYLE_CLASS_HOVER = 'landxxHover';
export const STYLE_CLASS_VISITED = 'visited';

@Component({
  // hack to have correct SVG xml but angular components !
  // tslint:disable-next-line:component-selector
  selector: 'g',
  templateUrl: './country-svg.component.html',
  styleUrls: ['./country-svg.component.css']
})
export class CountrySVGComponent implements OnInit {

  @Input() country: Country;
  xml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.xml = this.sanitizer.bypassSecurityTrustHtml(this.country.pathSvgFormat);
  }

}
