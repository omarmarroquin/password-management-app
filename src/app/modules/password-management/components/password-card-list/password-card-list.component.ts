import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IPasswordCardDetail } from '../../entities/password-managment';


@Component({
  selector: 'app-password-card-list',
  templateUrl: './password-card-list.component.html',
  styleUrls: ['./password-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordCardListComponent {

  @Input() passwordCardList!: IPasswordCardDetail[];
  @Input() filter!: string;

  get filteredPasswordCardList(): IPasswordCardDetail[] {
    return this.passwordCardList.filter(({ name }) => name.toLowerCase().includes(this.filter));
  }

}
