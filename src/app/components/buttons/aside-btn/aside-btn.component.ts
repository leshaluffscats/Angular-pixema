import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-btn',
  templateUrl: './aside-btn.component.html',
  styleUrls: ['./aside-btn.component.scss']
})
export class AsideBtnComponent {
  @Input() btnText: string;
}
