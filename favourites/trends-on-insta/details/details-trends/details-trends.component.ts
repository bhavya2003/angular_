import { Component } from '@angular/core';
import { RecommendationsComponent } from '../../../../../product-details/recommendations/recommendations.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../Models/AppState';
import { ProductService } from '../../../../../../../../State/Product/product.service';
import { bottomwear } from '../../../../../../../../../assets/Data/Womenbottomwear';
import { tops } from '../../../../../../../../../assets/Data/tops';
import { CartService } from '../../../../../../../../State/cart/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-trends',
  standalone: true,
  imports: [RecommendationsComponent,CommonModule,MatRadioModule,MatRadioGroup,MatButtonModule,FormsModule],
  templateUrl: './details-trends.component.html',
  styleUrl: './details-trends.component.scss'
})
export class DetailsTrendsComponent {

  selectedSize: String = '';
  similarproducts : any;
  bottomwear:any;
  tops:any;
  product:any;
  productId:any | null = null;

  

  constructor(private router: Router,private store:Store<AppState>,private productService:ProductService,private activatedRoute:ActivatedRoute, private cartService:CartService){}

  ngOnInit(){
    this.similarproducts=bottomwear;
    this.bottomwear=bottomwear.slice(0,4);
    this.tops=tops.slice(0,4);
    const id=this.activatedRoute.snapshot.paramMap.get("id");

    if (id !== null) {
      this.productId = +id; // Convert to number
      this.productService.findProductsById(this.productId); // Pass as number
    }
    

    this.productId=id

    this.store.pipe(select(store=>store.product)).subscribe((product)=>{
      this.product=product?.product
      console.log("store data", product.product)
    });
  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    const data={size:this.selectedSize,productId:this.productId}
    this.cartService.addItemToCart(data)


    this.cartService.getcart()

    this.router.navigate(['cart'])

    
  }


}
