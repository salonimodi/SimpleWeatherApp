import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private cityUrl = 'https://api.openweathermap.org/geo/1.0/direct';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }

  searchCities(query: string): Observable<any> {
    return this.http.get(`${this.cityUrl}?q=${query}&limit=5&appid=${this.apiKey}`);
  }
}