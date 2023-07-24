import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-more-btn',
  templateUrl: './show-more-btn.component.html',
  styleUrls: ['./show-more-btn.component.scss']
})
export class ShowMoreBtnComponent {
  // @Input() page: number;
  @Output() changedPage = new EventEmitter();

  changePage() {
    // this.page ++
    this.changedPage.emit();
  }
}
