import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IPasswordCardDetail } from '../../entities/password-managment';
import { addPasswordSuccessAction, deletePasswordsSuccessAction, getAllPasswordsSuccessAction, updatePasswordSuccessAction } from '../actions/password-management.action';

export interface PasswordCardListState extends EntityState<IPasswordCardDetail> { }

export function selectPartnerTicketId(item: IPasswordCardDetail): number {
  return item.id;
}

export const passwordCardListAdapter: EntityAdapter<IPasswordCardDetail> = createEntityAdapter<IPasswordCardDetail>({
  selectId: selectPartnerTicketId
});

export const initialState: PasswordCardListState = passwordCardListAdapter.getInitialState({});

export const passwordCardListReducer = createReducer(
  initialState,
  on(getAllPasswordsSuccessAction, (state, { result }) => passwordCardListAdapter.setAll(result, state)),
  on(addPasswordSuccessAction, (state, { result }) => passwordCardListAdapter.addOne(result, state)),
  on(updatePasswordSuccessAction, (state, { result }) => passwordCardListAdapter.updateOne(result, state)),
  on(deletePasswordsSuccessAction, (state, { passwordId }) => passwordCardListAdapter.removeOne(passwordId, state)),
);

export const { selectAll } = passwordCardListAdapter.getSelectors();
