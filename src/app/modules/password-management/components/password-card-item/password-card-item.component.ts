import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IPasswordCardDetail } from '../../entities/password-managment';
import { PasswordManagementFacade } from '../../password-management.facade';
import { PasswordCardFormComponent } from '../password-card-form/password-card-form.component';
import { PasswordDeleteComponent } from '../password-delete/password-delete.component';


@Component({
  selector: 'app-password-card-item',
  templateUrl: './password-card-item.component.html',
  styleUrls: ['./password-card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordCardItemComponent {

  @Input() passwordCard!: IPasswordCardDetail;

  constructor(
    public dialog: MatDialog,
    private facade: PasswordManagementFacade,
  ) { }

  openUpdatePasswordCardFormDialog({ id, ...restData }: IPasswordCardDetail): void {
    const dialogRef = this.dialog.open(PasswordCardFormComponent, {
      width: '400px',
      data: restData,
    });

    dialogRef.afterClosed().subscribe(payload => {
      this.facade.updatePassword({ id, ...payload});
    });
  }

  openDeletePasswordCardDialog({ id, ...restData }: IPasswordCardDetail): void {
    const dialogRef = this.dialog.open(PasswordDeleteComponent, {
      width: '400px',
      data: restData,
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) this.facade.deletePassword(id);
    });
  }

  copyToClipboard(): void {
    const { name, password } = this.passwordCard;
    navigator.clipboard.writeText(password).then(() => {
      alert("Copied the password for: " + name);
    });
  }

}
