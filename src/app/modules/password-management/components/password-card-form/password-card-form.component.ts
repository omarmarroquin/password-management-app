import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPasswordCardCreationPayload } from '../../entities/password-managment';


@Component({
  selector: 'app-password-card-form',
  templateUrl: './password-card-form.component.html',
  styleUrls: ['./password-card-form.component.scss']
})
export class PasswordCardFormComponent {

  form: FormGroup;
  showPassword: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PasswordCardFormComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IPasswordCardCreationPayload,
  ) {
    this.form = this.fb.group({
      url: [data.url || '', Validators.required],
      name: [data.name || '', Validators.required],
      username: [data.username || '', Validators.required],
      password: [this.data.password || '', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
