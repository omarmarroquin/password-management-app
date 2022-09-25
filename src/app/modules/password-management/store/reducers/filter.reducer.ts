import { createReducer, on, Action } from '@ngrx/store';

import { updateFilterAction } from '../actions/password-management.action';

export const initialState: string = '';

export const filterReducer = createReducer(
  initialState,
  on(updateFilterAction, (state, { payload }) => payload),
);