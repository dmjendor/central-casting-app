import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'shared/model/character';

@Component({
  selector: 'table-c107',
  templateUrl: './table-c107.component.html',
  styleUrls: ['./table-c107.component.scss']
})
export class TableC107Component implements OnInit {
  @Output('characterChange') emitter1: EventEmitter<Character> = new EventEmitter<Character>();
  @Input('character') set setCharacter(value) {
    this.character = value;
  }
  constructor() { }

  character = new Character();

  ngOnInit() {
  }

}
