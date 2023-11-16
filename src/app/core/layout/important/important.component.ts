import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppColors } from '../../assets/colors';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-important',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent {
  viewImportant: boolean = true;
  colors = AppColors;

  closeImportant() {
    this.viewImportant = false;
  }
}
