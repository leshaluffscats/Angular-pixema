import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectTheme } from 'src/app/store/selectors/theme.selector';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  public logo: string;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectTheme)
      .subscribe((isDark) =>
        isDark
          ? (this.logo = '../../../assets/images/pixema-logo.svg')
          : (this.logo = '../../../assets/images/pixema-logo-light.svg')
      );
  }

  handleLogoClick() {
    this.router.navigate(['/home']);
    // location.reload();
  }
}
