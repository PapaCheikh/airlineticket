import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppColors } from 'src/app/core/assets/colors';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    ToastrModule,
    MatDialogModule,
    DialogContentExampleDialogComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  //Attributes
  colors = AppColors;
  viewClass: boolean = false;
  viewdate: boolean = false;
  viewPassenger: boolean = false;

  //Injections
  toastr = Inject(ToastrService)
  public dialog = inject(MatDialog)

  //Functions
  viewmyclass() {
    this.viewClass = !this.viewClass;
  }

  viewmypassenger() {
    this.viewPassenger = !this.viewPassenger;
  }

  showSuccess() {
    this.toastr.info('Hello world!');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      data: { key: 'value', otherKey: 'otherValue' } // Les données que vous souhaitez envoyer
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
