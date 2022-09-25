import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPasswordCardCreationPayload } from '../../entities/password-managment';

@Component({
  selector: 'app-password-delete',
  templateUrl: './password-delete.component.html',
  styleUrls: ['./password-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<PasswordDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPasswordCardCreationPayload,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
