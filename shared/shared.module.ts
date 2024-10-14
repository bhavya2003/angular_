import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../feature/components/home/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from '../feature/components/home/navbar/nav-content/nav-content.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FooterComponent,NavbarComponent,NavContentComponent,ProductCardComponent,MatDialogModule,ProductsCardsComponent
  ],

  exports: [FooterComponent]



})
export class SharedModule { }
