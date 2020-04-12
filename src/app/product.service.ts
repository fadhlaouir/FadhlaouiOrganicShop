import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './models/product';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    this.db.list('products').push(product);
  }
  getAll() {
    return this.db.list('/products').valueChanges();
  }
  // getAll(): Observable<Product[]> {
  //   return this.db
  //     .list<Product>('/products')
  //     .snapshotChanges()
  //     .pipe(
  //       map((changes) =>
  //         changes.map((c) => {
  //           const data = c.payload.val() as Product;
  //           const id = c.payload.key;
  //           return { id, ...data };
  //         })
  //       )
  //     );
  // }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
