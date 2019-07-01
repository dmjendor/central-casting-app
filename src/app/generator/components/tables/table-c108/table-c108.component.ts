import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'shared/model/character';

@Component({
  selector: 'table-c108',
  templateUrl: './table-c108.component.html',
  styleUrls: ['./table-c108.component.scss']
})
export class TableC108Component implements OnInit {
  @Output('characterChange') emitter1: EventEmitter<Character> = new EventEmitter<Character>();
  @Input('character') set setCharacter(value) {
    this.character = value;
  }
  constructor() { }

  character = new Character();

  ngOnInit() {
  }

}
