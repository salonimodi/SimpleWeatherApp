import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { WeatherService } from '../shared/weather.service';
import { MatIcon } from '@angular/material/icon';
import { GroupByPipe } from '../shared/group-by.pipe';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-next-hour',
  standalone: true,
  imports: [MatDividerModule, 
            CommonModule,
            MatIcon,
            GroupByPipe,
            MatSnackBarModule],
  templateUrl: './next-hour.component.html',
  styleUrl: './next-hour.component.scss'
})
export class NextHourComponent implements OnInit{
  @Input() city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService,
              private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Enter a correct city name', 'Close', {
          duration: 3000
        });
      }
    });
  }
}
