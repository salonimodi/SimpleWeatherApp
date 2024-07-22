import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCityComponent } from './search-city/search-city.component';
import { HeaderComponent } from './header/header.component';
import { NextHourComponent } from "./next-hour/next-hour.component";
import { DynamicTabsComponent } from "./dynamic-tabs/dynamic-tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    SearchCityComponent,
    HeaderComponent, 
    NextHourComponent, 
    DynamicTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentCity: string = '';

  onCitySearched(city: string) {
    this.currentCity = city;
    console.log('City searched:', city);
  }
}
