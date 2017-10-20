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
  styleUrls: ['./ngc-float-item-button.component.css'],
  template: `
    <div #elementref class="item" (click)="clicked.emit($event)">
        <div class="content-wrapper" #contentref>
          <div class="content" [style.display]="content ? 'block' : 'none'">{{content}}</div>
        </div>
        <a class="fab-item">
           <mat-icon class="material-content-icon"> {{icon}} </mat-icon>
        </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcFloatItemButtonComponent {
  @Input() icon;
  @Input() content;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @ViewChild('elementref') elementref;
  @ViewChild('contentref') contentref;
}
