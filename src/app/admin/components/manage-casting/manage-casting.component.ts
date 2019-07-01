import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Casting } from 'shared/model/casting';
import { Table } from 'shared/model/table';
import { CastingService } from 'shared/services/casting.service';

import { CastingFormComponent } from '../casting-form/casting-form.component';






@Component({
  selector: 'manage-casting',
  templateUrl: './manage-casting.component.html',
  styleUrls: ['./manage-casting.component.scss']
})
export class ManageCastingComponent implements OnInit, OnDestroy, OnChanges {
  //@Output('selectedCastingChange') emitter1: EventEmitter<Casting> = new EventEmitter<Casting>();
  @Input() table: Table;
  castingSub: Subscription;
  castingList: Casting[];
  oldTable: string;
  selected: any[];
  selectedCasting: Casting;
  columns = [
    { prop: 'name' },
    { name: 'Bottom' },
    { name: 'Top' },
    { name: 'Description'},
    { name: 'Linktable' }
  ];

  constructor(
    private castingService: CastingService,
    private modalService: NgbModal,
    private router: Router
  ) { 
    
  }

  createCasting() {
    const activeModal = this.modalService.open(CastingFormComponent, {ariaLabelledBy: 'New Casting'});
    activeModal.componentInstance.editMode = false;
    // activeModal.componentInstance.treasure = item;
  }

  editCasting() {
    const activeModal = this.modalService.open(CastingFormComponent, {ariaLabelledBy: 'Edit ' + this.selectedCasting.name, });
    activeModal.componentInstance.casting = this.selectedCasting;
    activeModal.componentInstance.table = this.table;
    activeModal.componentInstance.editMode = true;
  }

  deleteCasting() {
    this.castingService.remove(this.selectedCasting.key);
  }

  onSelect({ selected }) {
    this.selectedCasting = this.selected[0];
    //this.emitter1.emit(this.selectedCasting);
    console.log(this.selectedCasting)
  }

  async ngOnInit() {
    this.createSubscriptions();
  }

  ngOnChanges() {
    if (this.table && this.oldTable && this.table.key  && (this.table.key !== this.oldTable)) {
      this.destroySubscriptions().then((init) => {
        this.createSubscriptions();
      });
    } else {
      this.createSubscriptions();
    }
  }
  ngOnDestroy() {
    this.destroySubscriptions();
  }

  createSubscriptions() {
    if(this.table && this.table.name){
      this.castingSub = this.castingService.getItemsByTable(this.table.name)
      .subscribe(cst => {
        this.castingList = cst as Casting[];
        this.castingList.sort((a, b) => (a.bottom - b.bottom));
        this.selected = [this.castingList[0]];
        this.selectedCasting = this.castingList[0];
        console.log(this.selectedCasting)
          this.oldTable = this.table.key;
      });
    }
  }

  destroySubscriptions() {
    const castingPromise  = new Promise((resolve, reject) => {
      this.castingSub.unsubscribe();
      resolve();
      reject();
    });

    return castingPromise.then((a) => {
      return true;
    });
  }

}
