import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NextHourComponent } from "../next-hour/next-hour.component";
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-tabs',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    NextHourComponent,
    MatIcon,
    MatTabsModule,
    CommonModule],
  templateUrl: './dynamic-tabs.component.html',
  styleUrl: './dynamic-tabs.component.scss'
})
export class DynamicTabsComponent {
  tabs = ['Rio De Janeiro', 'Beijing', 'Los Angeles'];
  selected = new FormControl(0);

  @Input() set newCity(city: string) {
    if (city && !this.tabs.includes(city)) {
      this.addTab(city);
    }
  }
  
  addTab(city: string) {
    this.tabs.push(city);
    this.selected.setValue(this.tabs.length - 1);
    }

  removeTab(index: number): void {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
    }

}
