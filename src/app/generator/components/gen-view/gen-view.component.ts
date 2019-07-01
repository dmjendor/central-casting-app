import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Casting } from 'shared/model/casting';
import { Character } from 'shared/model/character';
import { Table } from 'shared/model/table';
import { CastingService } from 'shared/services/casting.service';
import { TablesService } from 'shared/services/tables.service';

@Component({
  selector: 'gen-view',
  templateUrl: './gen-view.component.html',
  styleUrls: ['./gen-view.component.css']
})
export class GenViewComponent implements OnInit, OnDestroy {

  character: Character = new Character;
  castingSub: Subscription;
  details: Casting[];
  selectedDetail: Casting;
  tableSub: Subscription[];
  tables: Table[];
  selectedTable: Table;

  constructor(
    private castingService: CastingService,
    private tableService: TablesService,
  ) { }


  ngOnInit() {
  }

  ngOnDestroy() {

  }

  wizardGenerator = function() {

  };
}
