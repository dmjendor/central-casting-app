import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Casting } from 'shared/model/casting';
import { CastingService } from 'shared/services/casting.service';

@Component({
  selector: 'casting-form',
  templateUrl: './casting-form.component.html',
  styleUrls: ['./casting-form.component.scss']
})
export class CastingFormComponent implements OnInit {
  @Input() public casting: Casting;
  @Input() public editMode: boolean;

  constructor(
    public castingService: CastingService,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    if (!this.casting) {
      this.casting = new Casting();
    }
  }

  save() {
    if (this.casting.key) {
      this.castingService.update(this.casting.key, this.casting).then((a) => {
        this.modal.close();
      });
    } else {
      this.castingService.create(this.casting);
      this.modal.close();
    }

  }

  delete() {
    this.castingService.remove(this.casting.key).then((a) => {
      this.modal.close();
    });
  }

  cancel() {
    this.modal.close();
  }

}
