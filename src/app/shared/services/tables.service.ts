import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Table } from 'shared/model/table';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  table$: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
    ) {
    this.table$ = this.db.list('/tables', c => c.orderByChild('table'))
    .snapshotChanges();
   }

  create(obj: Table) {
    return this.db.list('/tables').push(obj);
  }

  update(tableID: string, obj: Table) {
    return this.db.object('/tables/' + tableID).update(obj);
  }

  remove(tableID: string) {
    return this.db.object('/tables/' + tableID).remove();
  }

  getAll() {
    return this.table$.pipe(map(changes => {
      return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
    }));
  }

  get(tableID: string) {
    return this.db.object('/table/' + tableID);
  }

  getSnapshot(tableId: string) {
    return this.http.get('https://central-casting-app.firebaseio.com/tables.json?orderBy="name"&equalTo="' + tableId + '"');
  }

  getSnapshotAll() {
    return this.http.get('https://central-casting-app.firebaseio.com/tables.json');
  }

  getTablesByName(tableId: string) {
    return this.db.list('/tables',
      ref => ref.orderByChild('name')
      .equalTo(tableId))
      .snapshotChanges()
      .pipe(map(items => {            // <== new way of chaining
        return items.map(a => {
          const data = a.payload.val() as Table;
          const key = a.payload.key;
          data.key  = key;
          return data;
        });
      }));
  }
}
