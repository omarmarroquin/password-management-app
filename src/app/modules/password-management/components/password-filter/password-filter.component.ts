import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PasswordManagementFacade } from '../../password-management.facade';

@Component({
  selector: 'app-password-filter',
  templateUrl: './password-filter.component.html',
  styleUrls: ['./password-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordFilterComponent {

  filterValue: string = '';

  constructor(
    private facade: PasswordManagementFacade,
  ) { }

  onChangeFilterValue(): void {
    this.facade.updateFilter(this.filterValue.toLowerCase());
  }

}
