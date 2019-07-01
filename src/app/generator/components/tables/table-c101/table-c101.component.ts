import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Casting } from 'shared/model/casting';
import { Character } from 'shared/model/character';
import { Table } from 'shared/model/table';
import { CastingService } from 'shared/services/casting.service';
import { TablesService } from 'shared/services/tables.service';

@Component({
  selector: 'table-c101',
  templateUrl: './table-c101.component.html',
  styleUrls: ['./table-c101.component.scss']
})
export class TableC101Component implements OnInit {
  @Output('characterChange') emitter1: EventEmitter<Character> = new EventEmitter<Character>();
  @Input('character') set setCharacter(value) {
    this.character = value;
  }
  table: Table;
  itemList: Casting[] = [];

  constructor(
    private castingService: CastingService,
    private tableService: TablesService
  ) { }

  character = new Character();
  ngOnInit() {
    // get snapshot of valuables from database
    this.tableService.getSnapshot('101').toPromise().then((tVal) => {
      // convert JSON object received into individual objects
      Object.entries(tVal).forEach(([key, value]) => {
        // for each object, create a copy for valuable transfer
        this.table = Object.assign({}, value) as Table;
      });
    });

    this.castingService.getSnapshotByTable('101').toPromise().then((tVal) => {
      // convert JSON object received into individual objects
      Object.entries(tVal).forEach(([key, value]) => {
        // for each object, create a copy for valuable transfer
         const val = Object.assign({}, value) as Casting;
         this.itemList.push(val);
      });
    });
  }

  generate() {
    console.log('a', this.table.top);
    const rand = Math.floor(Math.random() * this.table.top) + 1;
    console.log('b', rand);
    this.character.race  = this.itemList.find(obj => {
      return ((obj.top * 1) >= rand && (obj.bottom * 1) <= rand );
    }).name;
    this.emitter1.emit(this.character);

  }

}
