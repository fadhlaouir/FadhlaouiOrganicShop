import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list('/products').push(product);
  }

  // getAll() {
  //   return this.db.list('/products');
  // }
  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .map((actions) => {
        return actions.map((action) => ({
          key: action.key,
          ...action.payload.val(),
        }));
      });
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
