import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/core/layout/footer/footer.component';
import { ImportantComponent } from 'src/app/core/layout/important/important.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from 'src/app/core/layout/navbar/navbar.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    CommonModule,
    ImportantComponent,
    NavbarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

}
