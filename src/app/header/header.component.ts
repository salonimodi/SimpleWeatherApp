import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() searchedCity: EventEmitter<string> = new EventEmitter<string>();
  searchQuery = '';
  cities$: Observable<any[]> = of([]);
  private searchSubject = new Subject<string>();
  isSearchDisabled = true;

  constructor(private weatherService: WeatherService) {
    this.searchSubject.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(query => {
        if (query) {
          return this.weatherService.searchCities(query).pipe(
            catchError(() => of([]))
          );
        } else {
          return of([]); 
        }
      })
    ).subscribe(cities => {
      this.cities$ = of(cities);
      this.isSearchDisabled = !cities.length;
    });
  }

  onQueryChange(query: string) {
    this.searchSubject.next(query);
    this.isSearchDisabled = !query.trim();
  }

  onSearch(query: string) {
    if (!this.isSearchDisabled) {
      this.searchedCity.emit(query);
      this.searchQuery = '';
      this.cities$ = of([]);
    }
  }
}

