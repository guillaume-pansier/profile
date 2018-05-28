import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Country } from './country';
import { Observable, of, zip } from 'rxjs';


@Injectable()
export class CountryRepository {

    private countries: Array<Country> = [];

    constructor(private httpClient: HttpClient) { }

    getCountry(countryId: string): Observable<Country> {

      return this.loadCountries().pipe(
        map(countryArray => {

        for (const country of countryArray) {
          if (countryId === country.id) {
            return country;
          }
        }

        return undefined;
      }));
    }

    loadCountries(): Observable<Array<Country>> {

      if (this.countries.length !== 0) {
        return of(this.countries);
      }

      return zip(this.fetchRawSVGContries(), this.fetchCountryCodes(),
        (xmlDocument, codeList) => {
          const xmlJsonConverter = require('xml-js');
          const countriesJson = xmlJsonConverter.xml2js(xmlDocument, {compact: false, spaces: 4});

          for (const countryJson of countriesJson.elements[0].elements) {

            if (countryJson.name !== 'g') {
              continue;
            }

            this.countries.push(this.parseCountry(countryJson, codeList, xmlJsonConverter));
          }

          return this.countries;
        }
      );
    }

    private parseCountry(countryJson, codeList, convert): Country {
      const countryId: string = countryJson.attributes.id.toUpperCase();
      const countryName = codeList[countryId];

      for (const subElement of countryJson.elements) {
        this.addSubElementTitle(subElement, countryId, codeList);
      }

      let countrySvgContent = '<title id="title_' + countryId + '">' + countryName + '</title>\n>';
      countrySvgContent += convert.js2xml(countryJson, {compact: false, spaces: 4});
      return new Country(countrySvgContent, countryId, countryName);

    }

    private addSubElementTitle(subElement, countryId, codeList) {
      const subElementId = subElement.attributes ? subElement.attributes.id.toUpperCase() : undefined;
      if (subElementId && subElementId !== countryId) {
        if (codeList[subElementId]) {
          subElement.elements.push(
            {
              name: 'title',
              type: 'element',
              elements: [
                {
                  text: codeList[subElementId],
                  type: 'text'
                }
              ]
            });
        }
      }
      return subElementId;
    }

    fetchRawSVGContries(): Observable<string> {

      const headers = new HttpHeaders().set('Content-Type', 'text/xml');

      return this.httpClient.get('assets/travel/BlankMap-World_1985.svg', { headers: headers, responseType: 'text' }).pipe(
        catchError((error: any) => Observable.throw(error.json().error || 'Server error'))
      );
    }

    fetchCountryCodes(): Observable<Object> {

      return this.httpClient.get('assets/travel/countryISOCode.json', { responseType: 'json' }).pipe(
        catchError((error: any) => Observable.throw(error.json().error || 'Server error'))
      );
    }
}
