import { Component, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import {AlertEvent, AlertType} from '../../model/alert';
import { AlertEventService } from '../../service/alert-event.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-display',
  templateUrl: './alert-display.component.html',
  styleUrls: ['./alert-display.component.css']
})
export class AlertDisplayComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertDisplayComponent>, @Inject(MAT_DIALOG_DATA) public data: AlertEvent)
    {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
