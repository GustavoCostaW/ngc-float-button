import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ngc-item-button',
  styleUrls: ['./float-item-button.component.css'],
  template: `
    <div #elementref class="item" (click)="clicked.emit($event)">
        <div class="content-wrapper" #contentref>
          <div class="content" [style.display]="content ? 'block' : 'none'">{{content}}</div>
        </div>
        <a class="fab-item">
          <md-icon class="material-content-icon"> {{icon}} </md-icon>
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
