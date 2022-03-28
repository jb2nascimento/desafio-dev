import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  isVisible = false;
  queue: number = 0;
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  show() {
    if (this.queue == 0) {
      this.isVisible = true;
      this.change.emit(this.isVisible);
      this.queue++;
    }
  }

  hide() {
    if (this.queue == 1) {
      this.isVisible = false;
      this.change.emit(this.isVisible);
      this.queue--;
    }
  }

}
