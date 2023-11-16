import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-content-example-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit() {
  console.log('Data received:', this.data);
}
}
