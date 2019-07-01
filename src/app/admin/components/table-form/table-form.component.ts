import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'shared/model/table';
import { TablesService } from 'shared/services/tables.service';

@Component({
  selector: 'table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {
  @Input() public table: Table;
  @Input() public editMode: boolean;

  constructor(
    public tableService: TablesService,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    if (!this.table) {
      this.table = new Table();
    }
  }

  save() {
    if (this.table.key) {
      this.tableService.update(this.table.key, this.table).then((a) => {
        this.modal.close();
      });
    } else {
      this.tableService.create(this.table);
      this.modal.close();
    }

  }

  delete() {
    this.tableService.remove(this.table.key).then((a) => {
      this.modal.close();
    });
  }

  cancel() {
    this.modal.close();
  }

}
