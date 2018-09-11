/* created by @GustavoCostaW https://github.com/gustavocostaw/ngc-float-button  */

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit
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

  .textLower {
    text-transform: lowercase;
  }


  `],
  template: `
    <div #elementref class="item {{ disabled ? 'disabled' : ''}}"
    (click)="emitClickEvent($event)">
        <div class="content-wrapper" #contentref>
          <div class="content" [style.display]="content ? 'block' : 'none'">{{content}}</div>
        </div>
        <a class="fab-item" [style.backgroundColor]="color">
           <mat-icon *ngIf="icon" > {{ icon }} </mat-icon>
           <mat-icon *ngIf="customIconName" [svgIcon]="customIconName"></mat-icon>
        </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcFloatItemButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() customIconName: string;
  @Input() customIconPath: string;
  @Input() content: string;
  // tslint:disable-next-line:no-inferrable-types
  @Input() color: string = 'white';
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
  @Input() disabled: boolean = false;
  @ViewChild('elementref') elementref;
  @ViewChild('contentref') contentref;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

ngOnInit(): void {
    if (this.customIconPath && this.customIconName) {
      this.matIconRegistry.addSvgIcon(
        this.customIconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.customIconPath)
      );
    }
}

  emitClickEvent($event: Event) {
    if (this.disabled) {
      return this.disabled;
    }
    this.clicked.emit($event);
  }
}
