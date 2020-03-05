import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <i class="control-icon ion ion-ios-search" (click)="showInput()"></i>
    <input
      placeholder="Type your search request here..."
      #input
      [class.hidden]="!isInputShown"
      (blur)="hideInput()"
      (input)="onInput($event)"
    />
  `
})
export class SearchInputComponent {
  @ViewChild('input', { static: true }) public input: ElementRef;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  public isInputShown = false;

  public showInput() {
    this.isInputShown = true;
    this.input.nativeElement.focus();
  }

  public hideInput() {
    this.isInputShown = false;
  }

  public onInput(val: string) {
    this.search.emit(val);
  }
}
