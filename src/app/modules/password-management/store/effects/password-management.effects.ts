import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { PasswordManagementService } from '../../services/password-management.service';
import {
  addPasswordAction,
  addPasswordFailureAction,
  addPasswordSuccessAction,
  deletePasswordsAction,
  deletePasswordsFailureAction,
  deletePasswordsSuccessAction,
  getAllPasswordsAction,
  getAllPasswordsFailureAction,
  getAllPasswordsSuccessAction,
  updatePasswordAction,
  updatePasswordFailureAction,
  updatePasswordSuccessAction,
} from '../actions/password-management.action';


@Injectable()
export class PasswordManagementEffects {
  constructor(
    private actions$: Actions,
    private service: PasswordManagementService,
  ) { }

  fetchAllPasswords$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(getAllPasswordsAction),
    switchMap(() => this.service.fetchAllPasswords().pipe(
      map((result) => getAllPasswordsSuccessAction({ result })),
      catchError(() => of(getAllPasswordsFailureAction()))
    ))
  ));

  addPassword$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(addPasswordAction),
    switchMap(({ payload }) => this.service.createPasswordCard(payload).pipe(
      map((result) => addPasswordSuccessAction({ result })),
      catchError(() => of(addPasswordFailureAction())),
    ))
  ));

  updatePassword$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(updatePasswordAction),
    switchMap(({ payload }) => this.service.updatePasswordCard(payload).pipe(
      map(({ id, ...restData }) => updatePasswordSuccessAction({ result: { id, changes: restData } })),
      catchError(() => of(updatePasswordFailureAction())),
    ))
  ));

  deletePassword$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(deletePasswordsAction),
    switchMap(({ passwordId }) => this.service.deletePasswordCard(passwordId).pipe(
      map(() => deletePasswordsSuccessAction({ passwordId })),
      catchError(() => of(deletePasswordsFailureAction())),
    ))
  ));

}
