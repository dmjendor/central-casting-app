import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Table } from 'shared/model/table';
import { TablesService } from 'shared/services/tables.service';

import { TableFormComponent } from '../table-form/table-form.component';


@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, OnDestroy {
  @Output('tableChange') emitter1: EventEmitter<Table> = new EventEmitter<Table>();
  @Input('table') set setSelectedCasting(value) {
    this.table = value as Table;
  }

  tableSub: Subscription;
  tableList: Table[];
  selected: any[];
  selectedTable: Table;
  columns = [
    { prop: 'name' },
    { name: 'Top' },
    { name: 'Mod' }
  ];

  constructor(
    private tableService: TablesService,
    private modalService: NgbModal,
    private router: Router
  ) { 
    
  }
  table = new Table();


  createTable() {
      const activeModal = this.modalService.open(TableFormComponent, {ariaLabelledBy: 'New Table'});
      activeModal.componentInstance.editMode = false;
      // activeModal.componentInstance.treasure = item;
  }

  editTable() {
    const activeModal = this.modalService.open(TableFormComponent, {ariaLabelledBy: 'Edit ' + this.selectedTable.name, });
    activeModal.componentInstance.table = this.selectedTable;
    activeModal.componentInstance.editMode = true;
  }

  deleteTable() {
    this.tableService.remove(this.selectedTable.key);
  }

  onSelect({ selected }) {
    this.selectedTable = this.selected[0];
    this.emitter1.emit(this.selectedTable);
  }

  ngOnInit() {
    this.tableSub = this.tableService.getAll()
    .subscribe(tbl => {
      this.tableList = tbl;
      this.tableList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.selected = [this.tableList[0]];
      this.selectedTable = this.tableList[0];
    });
  }

  ngOnDestroy() {
    this.tableSub.unsubscribe();
  }

  onChange() {
    //document.getElementById(this.name).blur();

  }


}
