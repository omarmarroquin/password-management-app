import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PasswordCardListComponent } from './components/password-card-list/password-card-list.component';
import { PasswordCardItemComponent } from './components/password-card-item/password-card-item.component';
import { PasswordCardFormComponent } from './components/password-card-form/password-card-form.component';
import { PasswordManagementService } from './services/password-management.service';
import { PasswordManagementEffects } from './store/effects/password-management.effects';
import { passwordManagementRootReducer, PASSWORD_MANAGEMENT_FEATURE_KEY } from './store/reducers';
import { PasswordManagementFacade } from './password-management.facade';
import { PasswordDeleteComponent } from './components/password-delete/password-delete.component';
import { PasswordFilterComponent } from './components/password-filter/password-filter.component';


@NgModule({
  declarations: [
    PasswordCardListComponent,
    PasswordCardItemComponent,
    PasswordCardFormComponent,
    PasswordDeleteComponent,
    PasswordFilterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    StoreModule.forFeature('passwordManagementModule', PASSWORD_MANAGEMENT_FEATURE_KEY),
    EffectsModule.forFeature([PasswordManagementEffects])
  ],
  providers: [
    {
      provide: PASSWORD_MANAGEMENT_FEATURE_KEY,
      useValue: passwordManagementRootReducer
    },
    PasswordManagementService,
    PasswordManagementFacade,
  ],
  exports: [
    PasswordCardListComponent,
    PasswordFilterComponent,
  ],
})
export class PasswordManagementModule { }
