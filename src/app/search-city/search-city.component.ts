import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-city.component.html',
  styleUrl: './search-city.component.scss'
})
export class SearchCityComponent {
  @Output() cityChange = new EventEmitter<string>();
  city: string = '';

  searchCity() {
    this.cityChange.emit(this.city);
  }
}
