import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppColors } from '../../assets/colors';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  viewLangage: boolean = false;
  colors = AppColors;
  viewList: boolean = false;

  viewMyList() {
    this.viewList = !this.viewList;
  }

  viewLangagemine() {
    this.viewLangage = !this.viewLangage;
  }
}
