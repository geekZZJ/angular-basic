import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product/:prodTitle',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    CarouselComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routeConfig)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
