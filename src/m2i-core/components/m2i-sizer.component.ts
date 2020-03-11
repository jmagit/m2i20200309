import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'm2i-sizer',
  template: `
    <div>
    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`
})
export class M2iSizerComponent {
  @Input()  size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
