import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Casting } from '../model/casting';







@Injectable({
  providedIn: 'root'
})
export class CastingService {

  casting$: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
    ) {
    this.casting$ = this.db.list('/casting', c => c.orderByChild('table'))
    .snapshotChanges();
   }

  create(obj: Casting) {
    return this.db.list('/casting').push(obj);
  }

  update(castingID: string, obj: Casting) {
    return this.db.object('/casting/' + castingID).update(obj);
  }

  remove(castingID: string) {
    return this.db.object('/casting/' + castingID).remove();
  }

  getAll() {
    return this.casting$.pipe(map(changes => {
      return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
    }));
  }

  get(castingID: string) {
    return this.db.object('/casting/' + castingID);
  }

  getSnapshotByTable(tableId) {
    return this.http.get('https://central-casting-app.firebaseio.com/casting.json?orderBy="table"&equalTo="' + tableId + '"');
  }

  getSnapshotAll() {
    return this.http.get('https://central-casting-app.firebaseio.com/casting.json');
  }

  getItemsByTable(tableId: string) {
    return this.db.list('/casting',
      ref => ref.orderByChild('table')
      .equalTo(tableId))
      .snapshotChanges()
      .pipe(map(items => {            // <== new way of chaining
        return items.map(a => {
          const data = a.payload.val() as Casting;
          const key = a.payload.key;
          data.key  = key;
          return data;
        });
      }));
  }
}
