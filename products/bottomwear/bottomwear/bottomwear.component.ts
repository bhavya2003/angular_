import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filters, singleFilter } from '../../filterdata';
import { bottomwear } from '../../../../../../../assets/Data/Womenbottomwear';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BottomwearProductCardComponent } from '../bottomwear-product-card/bottomwear-product-card/bottomwear-product-card.component';
import { CommonModule } from '@angular/common';
import { ProductService } from 'app/State/Product/product.service';

@Component({
  selector: 'app-bottomwear',
  standalone: true,
  imports: [MatButtonModule,MatRadioModule,FormsModule,MatMenuModule,MatDivider,MatIconModule,MatCheckboxModule,CommonModule,BottomwearProductCardComponent],
  templateUrl: './bottomwear.component.html',
  styleUrl: './bottomwear.component.scss'
})
export class BottomwearComponent {

  filterData:any
  singleFilterData:any
  Bottomwear:any
  currentDate = new Date();
  allowedKeywords = ['bottom', 'pants', 'trousers', 'Jeans', 'jeans']; // Keywords for filtering
  dynamicBottomWear: any[] = [];
  combinedBottomWear: any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private productService: ProductService,
   private cdr: ChangeDetectorRef){

  }


  ngOnInit(){
     this.filterData=filters;
     this.singleFilterData=singleFilter
     this.Bottomwear=bottomwear
     this.fetchDynamicBottomWear();
  }


  fetchDynamicBottomWear() {
   this.productService.getAllProducts().subscribe(
     (response: any) => {
       const today = this.getFormattedDate(new Date());

       // Filter products based on creation date and title keywords
       this.dynamicBottomWear = response.filter((product: any) => {
         const productDate = this.getFormattedDate(new Date(product.createdAt));

         // Check if the product was created today and has the right title keywords
         return (
           productDate === today &&
           this.allowedKeywords.some(keyword =>
             product.title.toLowerCase().includes(keyword)
           )
         );
       });

       // Combine dynamic bottom wear with static data
       this.combinedBottomWear = [...bottomwear, ...this.dynamicBottomWear];
       console.log('Combined Bottom Wear:', this.combinedBottomWear);

       this.cdr.detectChanges(); // Manually trigger change detection
     },
     (error: any) => {
       console.error('Error fetching products:', error);
     }
   );
 }

 // Helper function to format date to 'YYYY-MM-DD' for easier comparison
 getFormattedDate(date: Date): string {
   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const day = date.getDate().toString().padStart(2, '0');
   return `${year}-${month}-${day}`;
 }


   handleMultipleSelectFilter(value:string, sectionId:string){
     const queryParams={...this.activatedRoute.snapshot.queryParams};

     console.log("query params",queryParams)
     // const filterValue=queryParams[sectionId]?

     const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];

     const valueIndex=filterValues.indexOf(value);

     if(valueIndex!=-1){
           filterValues.splice(valueIndex,1)
     }
     else{
        filterValues.push(value);
     }

     if(filterValues.length>0){
        queryParams[sectionId]=filterValues.join(",")
     }
     else{
        delete queryParams[sectionId];
     }

     this.router.navigate([],{queryParams})

   }

   handleSingleSelectFilter(value:string, sectionId:string){
     const queryParams={...this.activatedRoute.snapshot.queryParams};
     queryParams[sectionId]=value;
     this.router.navigate([],{queryParams})

     console.log(queryParams)
   }

  


}
