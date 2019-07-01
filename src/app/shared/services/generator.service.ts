import { Injectable, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Casting } from 'shared/model/casting';
import { Table } from 'shared/model/table';

import { CastingService } from './casting.service';
import { TablesService } from './tables.service';





@Injectable({
  providedIn: 'root'
})
export class GeneratorService implements OnChanges, OnDestroy {
  tableSub: Subscription;
  castingSub: Subscription;
  selectedTable: Table;
  selectedItem: Casting;
  tableList: Table[];
  itemList: Casting[];
  tableName: string = '';
  currentResuls: any[];

  constructor(
    private castingService: CastingService,
    private tableService: TablesService
  ) { }


  generate(table: string, mod: number){
    this.tableName = table;
    this.destroySubscriptions().then(function(){
      this.createSubscriptions().then(function(){

      });
    });
  }

  ngOnChanges() {
    this.destroySubscriptions().then((init) => {
      this.createSubscriptions();
    });
  }

  ngOnDestroy() {
    this.destroySubscriptions();
  }

  createSubscriptions() {
    const tablePromise = new Promise((resolve, reject)=>{
      this.tableSub = this.tableService.getTablesByName(this.tableName)
      .subscribe(tbl => {
        this.tableList = tbl as Table[];
      });
    });
    const castingPromise = new Promise((resolve, reject)=>{
      this.castingSub = this.castingService.getItemsByTable(this.tableName)
      .subscribe(item => {
        this.itemList = item as Casting[];
        return true;
      });
    });
    
    return tablePromise.then((a) => {
      return castingPromise.then((a) => {
        return true;
      });
    });  
  }

  destroySubscriptions() {
    const tablePromise  = new Promise((resolve, reject) => {
      this.tableSub.unsubscribe();
      resolve();
      reject();
    });

    const castingPromise  = new Promise((resolve, reject) => {
      this.castingSub.unsubscribe();
      resolve();
      reject();
    });

    return tablePromise.then((a) => {
      return castingPromise.then((a) => {
        return true;
      });
    });
  }
}
