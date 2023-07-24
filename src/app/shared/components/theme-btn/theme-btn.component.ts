import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from 'src/app/store/actions/theme.action';

@Component({
  selector: 'app-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.scss'],
})
export class ThemeBtnComponent {
  constructor(private store: Store) {}

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }
}
