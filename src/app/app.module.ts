import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ShopComponent } from './shop/shop.component';
import { NouisliderModule } from 'ng2-nouislider';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    TestimonialComponent,
    ShopComponent,
    LocationComponent,
    ContactComponent,
    ItemViewComponent,
    CartComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminAddProductsComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    RouterModule,
    NouisliderModule,
    HttpClientModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
