import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { FilePaths } from 'src/app/shared/constants/filePaths';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  readonly filePathConstant: typeof FilePaths = FilePaths;
  searchInputControl: FormControl = new FormControl();
  isCancelBtnShown = false;
  @Output() searchEvent = new EventEmitter<string>();
  private readonly ngUnsubscribe = new Subject();
  constructor() {
    //
  }

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe), debounceTime(50))
      .subscribe((value: string) => {
        this.isCancelBtnShown = value ? true : false;
        this.searchEvent.emit(value);
      });
  }

  cancelSearch(): void {
    this.searchInputControl.setValue('');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
    this.searchEvent.complete();
  }
}
