import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'

import { IPasswordCardDetail } from './modules/password-management/entities/password-managment';
import { PasswordCardFormComponent } from './modules/password-management/components/password-card-form/password-card-form.component';
import { PasswordManagementFacade } from './modules/password-management/password-management.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public dialog: MatDialog,
    private facade: PasswordManagementFacade,
  ) {
    facade.fetchAllPasswords();
  }
  
  get passwordCardList$(): Observable<IPasswordCardDetail[]> {
    return this.facade.passwordCardList$;
  };

  get filter$(): Observable<string> {
    return this.facade.filter$;
  }

  openCreatePasswordCardFormDialog(): void {
    const dialogRef = this.dialog.open(PasswordCardFormComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(payload => {
      this.facade.addPassword(payload);
    });
  }
}
