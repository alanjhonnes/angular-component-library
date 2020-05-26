import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
