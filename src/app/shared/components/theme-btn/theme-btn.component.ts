import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { toggleTheme } from 'src/app/store/actions/theme.action';
import { selectTheme } from 'src/app/store/selectors/theme.selector';

@Component({
  selector: 'app-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.scss'],
})
export class ThemeBtnComponent {
  public isChecked: boolean;
  public theme$ = this.store
    .select(selectTheme)
    .subscribe((isDark) => {
      if (isDark) {
        document.body.classList.remove('light');
        this.isChecked = false;
      } else {
        document.body.classList.add('light')
        this.isChecked = true;
      }
    });

  constructor(private store: Store<AppState>) { }

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }
}
