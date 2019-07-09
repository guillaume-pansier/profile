import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from '../country/country';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[appCountrySvg]',
  templateUrl: './country-svg.component.html',
  styleUrls: ['./country-svg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySVGComponent implements OnInit {

  @Input() country: Country;
  @Input() visited: boolean;
  hover = false;
  xml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.xml = this.sanitizer.bypassSecurityTrustHtml(this.country.pathSvgFormat);
  }

  onLeaveCountry() {
    this.hover = false;
  }

  onHoverCountry() {
    this.hover = true;
  }
}
