import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";

import { IPasswordCardCreationPayload, IPasswordCardDetail } from "../../entities/password-managment";

export const getAllPasswordsAction = createAction(
  '[Password Management] Get All Password',
);

export const getAllPasswordsSuccessAction = createAction(
  '[Password Management] Get All Password Success',
  props<{ result: IPasswordCardDetail[] }>()
);

export const getAllPasswordsFailureAction = createAction(
  '[Password Management] Get All Password Failure',
);

export const addPasswordAction = createAction(
  '[Password Management] Add Password',
  props<{ payload: IPasswordCardCreationPayload }>()
);

export const addPasswordSuccessAction = createAction(
  '[Password Management] Add Password Success',
  props<{ result: IPasswordCardDetail }>()
);

export const addPasswordFailureAction = createAction(
  '[Password Management] Add Password Failure',
);

export const updatePasswordAction = createAction(
  '[Password Management] Update Password',
  props<{ payload: IPasswordCardDetail }>()
);

export const updatePasswordSuccessAction = createAction(
  '[Password Management] Update Password Success',
  props<{ result: Update<IPasswordCardDetail> }>()
);

export const updatePasswordFailureAction = createAction(
  '[Password Management] Update Password Failure',
);

export const deletePasswordsAction = createAction(
  '[Password Management] Delete Password',
  props<{ passwordId: number }>(),
);

export const deletePasswordsSuccessAction = createAction(
  '[Password Management] Delete Password Success',
  props<{ passwordId: number }>(),
);

export const deletePasswordsFailureAction = createAction(
  '[Password Management] Delete Password Failure',
);

export const updateFilterAction = createAction(
  '[Password Management] Update Filter',
  props<{ payload: string }>(),
);
