/* created by @GustavoCostaW https://github.com/gustavocostaw/ngc-float-button  */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ngc-float-item-button',
  styles: [`

  .item {
    width:250px;
    height: 40px;
    left:-203px;
    transform: translate3d(0, 0, 0);
    transition: transform, opacity ease-out 200ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-duration: 180ms;
    position: absolute;
    cursor: pointer;
    top:5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .item.disabled {
    pointer-events: none;
  }
  
  .item.disabled .fab-item {
    background-color: lightgray;
  }

  .content {
    background: #333333;
    margin-right: 50px;
    line-height: 25px;
    color: white;
    text-transform: lowercase;
    padding: 2px 7px;
    border-radius: 3px;
    display: none;
    font-size: 12px;
    height: 25px;
    margin-top: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  }

  .fab-item {
    right: 0;
    background: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    position: absolute;
    color: #797979;
    text-align: center;
    cursor: pointer;
    line-height: 50px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  }


  `],
  template: `
    <div #elementref class="item {{ isDisabled ? 'disabled' : ''}}" 
    (click)="emitClickEvent($event)">
        <div class="content-wrapper" #contentref>
          <div class="content" [style.display]="content ? 'block' : 'none'">{{content}}</div>
        </div>
        <a class="fab-item" [style.backgroundColor]="color">
           <mat-icon> {{ icon }} </mat-icon>
        </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcFloatItemButtonComponent {
  @Input() icon: string;
  @Input() content: string;
  @Input() color: string = 'white';
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean = false;
  @ViewChild('elementref') elementref;
  @ViewChild('contentref') contentref;

  emitClickEvent($event: Event) {
    if (this.disabled)
      return this.disabled;

    this.clicked.emit($event);
  }
}
