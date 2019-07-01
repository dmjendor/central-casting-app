import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'shared/model/character';

@Component({
  selector: 'table-c103',
  templateUrl: './table-c103.component.html',
  styleUrls: ['./table-c103.component.scss']
})
export class TableC103Component implements OnInit {
  @Output('characterChange') emitter1: EventEmitter<Character> = new EventEmitter<Character>();
  @Input('character') set setCharacter(value) {
    this.character = value;
  }
  constructor() { }

  character = new Character();

  ngOnInit() {
  }

}
