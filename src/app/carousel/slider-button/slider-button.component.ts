import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit {

  @Output() messageEvent = new EventEmitter();
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }
  clickFunction(): void{
    this.messageEvent.emit();
  }
}
