import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { BottomwearProductCardComponent } from '../../../bottomwear/bottomwear-product-card/bottomwear-product-card/bottomwear-product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { filters, singleFilter } from '../../../filterdata';
import { bottomwear } from '../../../../../../../../assets/Data/Womenbottomwear';
import { CasualProductCardsComponent } from './casual-product-card/casual-product-cards/casual-product-cards.component';
import { casuals } from '../../../../../../../../assets/Data/casuals';
import { ProductService } from 'app/State/Product/product.service';

@Component({
  selector: 'app-casuals',
  standalone: true,
  imports: [MatButtonModule,MatRadioModule,FormsModule,MatMenuModule,MatDivider,MatIconModule,MatCheckboxModule,CommonModule,CasualProductCardsComponent],
  templateUrl: './casuals.component.html',
  styleUrl: './casuals.component.scss'
})
export class CasualsComponent {

  filterData:any
  singleFilterData:any
  casuals:any
  currentDate = new Date();
  allowedKeywords = ['casual', 't-shirt', 'shorts', 'Casual']; // Keywords for filtering
  dynamicCasuals: any[] = [];
  combinedCasuals: any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private productService: ProductService,
   private cdr: ChangeDetectorRef){

  }


  ngOnInit(){
     this.filterData=filters;
     this.singleFilterData=singleFilter
     this.casuals=casuals
     this.fetchDynamicCasuals();
     
  }

  fetchDynamicCasuals() {
   this.productService.getAllProducts().subscribe(
     (response: any) => {
       const today = this.getFormattedDate(new Date());

       // Filter products based on creation date and title keywords
       this.dynamicCasuals = response.filter((product: any) => {
         const productDate = this.getFormattedDate(new Date(product.createdAt));

         // Check if the product was created today and has the right title keywords
         return (
           productDate === today &&
           this.allowedKeywords.some(keyword =>
             product.title.toLowerCase().includes(keyword)
           )
         );
       });

       // Combine dynamic casuals with static data
       this.combinedCasuals = [...casuals, ...this.dynamicCasuals];
       console.log('Combined Casuals:', this.combinedCasuals);

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
