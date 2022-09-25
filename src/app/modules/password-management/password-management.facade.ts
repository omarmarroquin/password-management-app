import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { IPasswordCardCreationPayload, IPasswordCardDetail } from "./entities/password-managment";
import { addPasswordAction, deletePasswordsAction, getAllPasswordsAction, updateFilterAction, updatePasswordAction } from "./store/actions/password-management.action";
import { filterSelector, passwordCardListSelector } from "./store/selectors/password-management.selector";
import { PasswordManagementState } from "./store/state/password-management";

@Injectable()
export class PasswordManagementFacade {

  constructor(private store: Store<PasswordManagementState>) { }

  public passwordCardList$: Observable<IPasswordCardDetail[]> = this.store.pipe(
    select(passwordCardListSelector)
  );

  public filter$: Observable<string> = this.store.pipe(
    select(filterSelector)
  );

  public fetchAllPasswords(): void {
    this.store.dispatch(getAllPasswordsAction());
  }

  public addPassword(payload: IPasswordCardCreationPayload): void {
    this.store.dispatch(addPasswordAction({ payload }));
  }

  public updatePassword(payload: IPasswordCardDetail): void {
    this.store.dispatch(updatePasswordAction({ payload }));
  }

  public deletePassword(passwordId: number): void {
    this.store.dispatch(deletePasswordsAction({ passwordId }));
  }

  public updateFilter(payload: string): void {
    this.store.dispatch(updateFilterAction({ payload }));
  }

}
