import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: MyOrdersComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'my/orders',
        component: ProductsComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],
  providers: [AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
