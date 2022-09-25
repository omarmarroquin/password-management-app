import { PasswordCardListState } from "../reducers/password-card-list.reducer";

export type PasswordManagementState = Readonly<{
  passwordCardList: PasswordCardListState;
  filter: string;
}>;
