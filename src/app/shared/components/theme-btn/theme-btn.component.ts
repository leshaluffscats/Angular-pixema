import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { toggleTheme } from 'src/app/store/actions/theme.action';
import { selectTheme } from 'src/app/store/selectors/theme.selector';

@Component({
  selector: 'app-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.scss'],
})
export class ThemeBtnComponent {
  public theme$ = this.store
    .select(selectTheme)
    .subscribe((isDark) =>
      isDark
        ? document.body.classList.remove('light')
        : document.body.classList.add('light')
    );

  constructor(private store: Store<AppState>) {}

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }
}
