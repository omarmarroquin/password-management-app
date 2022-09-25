import { InjectionToken } from "@angular/core";
import { ActionReducerMap, combineReducers } from "@ngrx/store";
import { PasswordManagementState } from "../state/password-management";

import { filterReducer as filter } from "./filter.reducer";
import { passwordCardListReducer as passwordCardList } from "./password-card-list.reducer";

export const PASSWORD_MANAGEMENT_FEATURE_KEY = new InjectionToken<
  ActionReducerMap<PasswordManagementState>
>('Feature PasswordManagement Reducers');

export const passwordManagementRootReducer = combineReducers({
  filter,
  passwordCardList,
});
