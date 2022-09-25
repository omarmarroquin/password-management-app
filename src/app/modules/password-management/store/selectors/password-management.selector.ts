import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PasswordManagementState } from '../state/password-management';;
import * as fromPasswordCardListReducer from '../reducers/password-card-list.reducer';

export const passwordManagementRootSelector = createFeatureSelector<PasswordManagementState>('passwordManagementModule');

export const filterSelector = createSelector(
  passwordManagementRootSelector,
  state => state.filter,
);

export const passwordCardListEntitySelector = createSelector(
  passwordManagementRootSelector,
  state => state.passwordCardList,
);

export const passwordCardListSelector = createSelector(passwordCardListEntitySelector, fromPasswordCardListReducer.selectAll);
